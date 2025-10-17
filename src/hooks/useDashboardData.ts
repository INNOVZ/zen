import { useCallback, useState } from 'react';
import { useCustomizeStore } from '@/stores/customizeStore';
import { conversationApi } from '@/app/api/routes';
import { analyzeError, logError } from '@/utils/errorHandling';
import { ConversationInfo } from '@/types/schemaTypes';
/**
 * Custom hook for optimized dashboard data loading
 * Handles sequential loading of critical data first, then secondary data
 */
export const useDashboardData = () => {
  const {
    loading,
    analyticsLoading,
    orgChatbots: chatbots,
    uploads,
    conversations,
    performanceMetrics: analyticsMetrics,
    connectionStatus,
    loadChatbots,
    loadUploads,
    loadPerformanceMetrics,
    setConversations,
    testConnection,
  } = useCustomizeStore();

  // Fast conversation count for immediate display
  const [conversationCount, setConversationCount] = useState<number>(0);
  const [conversationCountLoading, setConversationCountLoading] = useState(false);

  // Fast conversation count loading
  const loadConversationCount = useCallback(async () => {
    try {
      setConversationCountLoading(true);
      const count = await conversationApi.getConversationCount();
      setConversationCount(count);
    } catch (error) {
      console.error("Error loading conversation count:", error);
      setConversationCount(0);
    } finally {
      setConversationCountLoading(false);
    }
  }, []);

  // Non-blocking data loading for better dashboard performance
  const loadDashboardData = useCallback(async () => {
    try {
      // Load critical data first (chatbots and uploads) for immediate UI display
      await Promise.allSettled([
        loadChatbots(),
        loadUploads(),
        loadConversationCount(), // Load conversation count immediately
      ]);

      // Load conversation details in background (much smaller sample)
      setTimeout(async () => {
        try {
          const conversationPromise = conversationApi.getConversations(10); // Only 10 for dashboard
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Conversation loading timeout')), 1500)
          );
          
          const userConversations = await Promise.race([conversationPromise, timeoutPromise]);
          setConversations(userConversations as ConversationInfo[]);
        } catch (error) {
          const errorInfo = analyzeError(error);
          logError(error, "loading conversations", errorInfo);
          setConversations([]);
        }
      }, 100);

      // Load analytics data in background (use 30 days to capture more data)
      setTimeout(() => {
        loadPerformanceMetrics(30);
      }, 200);
    } catch (error) {
      const errorInfo = analyzeError(error);
      logError(error, "loading dashboard data", errorInfo);
    }
  }, [loadChatbots, loadUploads, loadConversationCount, setConversations, loadPerformanceMetrics]);

  const handleRefreshAnalytics = useCallback(async () => {
    await loadPerformanceMetrics(30);
  }, [loadPerformanceMetrics]);

  const refreshConnection = useCallback(() => {
    testConnection();
    loadDashboardData();
  }, [testConnection, loadDashboardData]);

  return {
    // Data
    loading,
    analyticsLoading,
    chatbots,
    uploads,
    conversations,
    analyticsMetrics,
    isOffline: connectionStatus === 'disconnected',
    
    // Fast conversation data
    conversationCount,
    conversationCountLoading,
    
    // Actions
    loadDashboardData,
    handleRefreshAnalytics,
    refreshConnection,
  };
};
