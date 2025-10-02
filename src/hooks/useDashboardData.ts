/**
 * Enhanced dashboard data hook with intelligent caching and optimized loading
 */

import { useCallback, useState, useEffect, useRef } from 'react';
import { useCustomizeStore } from '@/stores/customizeStore';
import { dashboardDataService } from '@/services/dashboardData';
import { getCacheStats } from '@/utils/dataFetching';
import type { ChatbotInfo, UploadFile, ConversationInfo } from '@/types/schemaTypes';
import type { OrganizationResponse, PerformanceMetrics } from '@/api/types/index';

interface DashboardDataState {
  chatbots?: ChatbotInfo[];
  uploads?: UploadFile[];
  conversations?: ConversationInfo[];
  conversationCount?: number;
  organization?: OrganizationResponse | null;
  performanceMetrics?: unknown;
}

interface LoadingState {
  initial: boolean;
  chatbots: boolean;
  uploads: boolean;
  conversations: boolean;
  analytics: boolean;
  refreshing: boolean;
}

export const useDashboardData = (userId?: string) => {
  const {
    connectionStatus,
    setLoading,
    orgChatbots,
    uploads,
    conversations,
    performanceMetrics,
    setOrgChatbots,
    setUploads,
    setConversations,
    setPerformanceMetrics,
  } = useCustomizeStore();

  // Enhanced loading states
  const [loadingState, setLoadingState] = useState<LoadingState>({
    initial: true,
    chatbots: false,
    uploads: false,
    conversations: false,
    analytics: false,
    refreshing: false,
  });

  // Data state
  const [data, setData] = useState<Partial<DashboardDataState>>({});
  const [error, setError] = useState<string | null>(null);
  
  // Prevent duplicate requests
  const loadingRef = useRef(false);
  const initialLoadRef = useRef(false);

  // Cache statistics for monitoring
  const [cacheStats, setCacheStats] = useState({ size: 0, ongoingRequests: 0 });

  // Backward compatibility - conversation count
  const [conversationCount, setConversationCount] = useState<number>(0);
  const [conversationCountLoading, setConversationCountLoading] = useState(false);

  /**
   * Load critical dashboard data with intelligent batching
   */
  const loadDashboardData = useCallback(async (forceRefresh = false) => {
    if (loadingRef.current && !forceRefresh) return;
    
    try {
      loadingRef.current = true;
      setError(null);
      
      if (!initialLoadRef.current) {
        setLoadingState(prev => ({ ...prev, initial: true }));
        setLoading(true);
      } else if (forceRefresh) {
        setLoadingState(prev => ({ ...prev, refreshing: true }));
      }

      // Load critical data in parallel
      setConversationCountLoading(true);
      const criticalData = await dashboardDataService.loadDashboardData(userId);
      
      // Update store and local state immediately
      if (criticalData.chatbots) {
        setOrgChatbots(criticalData.chatbots);
        setData(prev => ({ ...prev, chatbots: criticalData.chatbots! }));
      }
      
      if (criticalData.uploads) {
        setUploads(criticalData.uploads);
        setData(prev => ({ ...prev, uploads: criticalData.uploads! }));
      }
      
      if (typeof criticalData.conversationCount === 'number') {
        setConversationCount(criticalData.conversationCount);
        setConversationCountLoading(false);
        setData(prev => ({ ...prev, conversationCount: criticalData.conversationCount! }));
      }
      
      if (criticalData.organization) {
        setData(prev => ({ ...prev, organization: criticalData.organization! }));
      }

      // Load conversations in background (non-blocking)
      setTimeout(async () => {
        try {
          setLoadingState(prev => ({ ...prev, conversations: true }));
          const conversationData = await dashboardDataService.loadConversations(10, userId);
          setConversations(conversationData);
          setData(prev => ({ ...prev, conversations: conversationData }));
        } catch {
          // Optional data failed to load
        } finally {
          setLoadingState(prev => ({ ...prev, conversations: false }));
        }
      }, 100);

      // Load analytics in background (non-critical)
      setTimeout(async () => {
        try {
          setLoadingState(prev => ({ ...prev, analytics: true }));
          const metricsData = await dashboardDataService.loadPerformanceMetrics(7, userId);
          if (metricsData) {
            setPerformanceMetrics(metricsData as PerformanceMetrics);
            setData(prev => ({ ...prev, performanceMetrics: metricsData }));
          }
        } catch {
          // Optional data failed to load
        } finally {
          setLoadingState(prev => ({ ...prev, analytics: false }));
        }
      }, 200);

      // Prefetch likely-to-be-needed data
      dashboardDataService.prefetchDashboardData(userId);

      initialLoadRef.current = true;
      
    } catch {
      setError('Failed to load dashboard data');
    } finally {
      loadingRef.current = false;
      setLoading(false);
      setLoadingState(prev => ({ 
        ...prev, 
        initial: false, 
        refreshing: false 
      }));
    }
  }, [userId, setLoading, setOrgChatbots, setUploads, setConversations, setPerformanceMetrics]);

  /**
   * Refresh specific data types
   */
  const refreshChatbots = useCallback(async () => {
    try {
      setLoadingState(prev => ({ ...prev, chatbots: true }));
      const chatbots = await dashboardDataService.refreshChatbots(userId);
      setOrgChatbots(chatbots);
      setData(prev => ({ ...prev, chatbots }));
    } catch (error) {
      console.error('Chatbots refresh failed:', error);
    } finally {
      setLoadingState(prev => ({ ...prev, chatbots: false }));
    }
  }, [userId, setOrgChatbots]);

  const refreshUploads = useCallback(async () => {
    try {
      setLoadingState(prev => ({ ...prev, uploads: true }));
      const uploads = await dashboardDataService.refreshUploads(userId);
      setUploads(uploads);
      setData(prev => ({ ...prev, uploads }));
    } catch (error) {
      console.error('Uploads refresh failed:', error);
    } finally {
      setLoadingState(prev => ({ ...prev, uploads: false }));
    }
  }, [userId, setUploads]);

  const refreshAnalytics = useCallback(async () => {
    try {
      setLoadingState(prev => ({ ...prev, analytics: true }));
      const metrics = await dashboardDataService.loadPerformanceMetrics(7, userId);
      if (metrics) {
        setPerformanceMetrics(metrics as PerformanceMetrics);
        setData(prev => ({ ...prev, performanceMetrics: metrics }));
      }
    } catch (error) {
      console.error('Analytics refresh failed:', error);
    } finally {
      setLoadingState(prev => ({ ...prev, analytics: false }));
    }
  }, [userId, setPerformanceMetrics]);

  /**
   * Invalidate cache and refresh all data
   */
  const refreshAll = useCallback(async () => {
    dashboardDataService.invalidateUserData(userId);
    await loadDashboardData(true);
  }, [userId, loadDashboardData]);

  /**
   * Backward compatibility methods
   */
  const handleRefreshAnalytics = useCallback(async () => {
    return refreshAnalytics();
  }, [refreshAnalytics]);

  const refreshConnection = useCallback(() => {
    return refreshAll();
  }, [refreshAll]);

  // Update cache stats periodically
  useEffect(() => {
    const updateCacheStats = () => {
      setCacheStats(getCacheStats());
    };

    updateCacheStats();
    const interval = setInterval(updateCacheStats, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-load data when userId changes
  useEffect(() => {
    if (userId && !initialLoadRef.current) {
      loadDashboardData();
    }
  }, [userId, loadDashboardData]);

  return {
    // Backward compatibility API (original interface)
    loading: loadingState.initial,
    analyticsLoading: loadingState.analytics,
    chatbots: orgChatbots,
    uploads,
    conversations,
    analyticsMetrics: performanceMetrics,
    isOffline: connectionStatus === 'disconnected',
    conversationCount,
    conversationCountLoading,
    loadDashboardData,
    handleRefreshAnalytics,
    refreshConnection,
    
    // Enhanced features
    loadingState,
    data,
    error,
    connectionStatus,
    cacheStats,
    
    // Additional actions
    refreshChatbots,
    refreshUploads,
    refreshAnalytics,
    refreshAll,
    
    // Computed values
    stats: {
      totalChatbots: (data.chatbots || orgChatbots)?.length || 0,
      totalUploads: (data.uploads || uploads)?.length || 0,
      totalConversations: data.conversationCount || conversationCount || conversations?.length || 0,
      activeUsers: 0, // This could be calculated from analytics data
    },
  };
};
