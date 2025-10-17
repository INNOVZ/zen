"use client";

import { useState } from 'react';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { subscriptionApi } from '@/app/api/subscription';

interface TokenError {
  error: 'Insufficient tokens';
  tokens_requested: number;
  tokens_available: number;
  monthly_limit: number;
  reset_date: string;
}

export const useTokenHandling = () => {
  const { subscription, consumeTokens, checkTokenAvailability } = useSubscription();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [tokenError, setTokenError] = useState<TokenError | null>(null);

  const handleTokenError = (error: unknown) => {
    console.error('Token error:', error);
    
    // Check if it's a token limit error
    if (typeof error === 'object' && error !== null) {
      const maybeStatus = (error as { status?: unknown }).status;
      const maybeDetail = (error as { detail?: unknown }).detail;
      const isStatus402 = typeof maybeStatus === 'number' && maybeStatus === 402;
      const isInsufficientTokens =
        typeof maybeDetail === 'object' && maybeDetail !== null &&
        (maybeDetail as { error?: unknown }).error === 'Insufficient tokens';

      if (!isStatus402 && !isInsufficientTokens) {
        return false;
      }

      const tokenErrorData = (maybeDetail as TokenError | undefined) || (error as Partial<TokenError>);
      setTokenError(tokenErrorData as TokenError);
      setShowUpgradeModal(true);
      return true; // Indicates error was handled
    }
    
    return false; // Error was not handled
  };

  const closeUpgradeModal = () => {
    setShowUpgradeModal(false);
    setTokenError(null);
  };

  const estimateTokensForOperation = (
    operationType: 'chat' | 'document_upload' | 'document_processing' | 'web_scraping' | 'embedding_generation',
    messageLength?: number,
    documentSize?: number
  ): number => {
    return subscriptionApi.estimateTokensForOperation(operationType, messageLength, documentSize);
  };

  const checkTokensBeforeOperation = async (
    operationType: 'chat' | 'document_upload' | 'document_processing' | 'web_scraping' | 'embedding_generation',
    messageLength?: number,
    documentSize?: number
  ): Promise<boolean> => {
    try {
      const estimatedTokens = estimateTokensForOperation(operationType, messageLength, documentSize);
      const availability = await checkTokenAvailability(estimatedTokens);
      
      if (!availability.has_enough_tokens) {
        setTokenError({
          error: 'Insufficient tokens',
          tokens_requested: estimatedTokens,
          tokens_available: availability.tokens_available,
          monthly_limit: subscription?.monthly_limit || 0,
          reset_date: subscription?.reset_date || new Date().toISOString(),
        });
        setShowUpgradeModal(true);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error checking token availability:', error);
      // Allow operation to proceed if check fails
      return true;
    }
  };

  const consumeTokensForOperation = async (
    operationType: 'chat' | 'document_upload' | 'document_processing' | 'web_scraping' | 'embedding_generation',
    messageLength?: number,
    documentSize?: number
  ): Promise<boolean> => {
    try {
      const estimatedTokens = estimateTokensForOperation(operationType, messageLength, documentSize);
      
      await consumeTokens({
        entity_id: '', // Will be filled by the API
        entity_type: 'user', // Will be determined by the API
        tokens_consumed: estimatedTokens,
        operation_type: operationType,
      });
      
      return true;
    } catch (error) {
      return handleTokenError(error);
    }
  };

  const wrapApiCall = async <T>(
    apiCall: () => Promise<T>,
    operationType: 'chat' | 'document_upload' | 'document_processing' | 'web_scraping' | 'embedding_generation',
    messageLength?: number,
    documentSize?: number
  ): Promise<T | null> => {
    try {
      // Check tokens before making the call
      const hasEnoughTokens = await checkTokensBeforeOperation(operationType, messageLength, documentSize);
      if (!hasEnoughTokens) {
        return null;
      }

      // Make the API call
      const result = await apiCall();
      
      // Consume tokens after successful operation
      await consumeTokensForOperation(operationType, messageLength, documentSize);
      
      return result;
    } catch (error) {
      if (handleTokenError(error)) {
        return null;
      }
      throw error;
    }
  };

  return {
    handleTokenError,
    estimateTokensForOperation,
    checkTokensBeforeOperation,
    consumeTokensForOperation,
    wrapApiCall,
    showUpgradeModal,
    tokenError,
    closeUpgradeModal,
  };
};
