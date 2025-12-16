/**
 * Simplified API Tests
 * Tests API module structure and basic functionality
 */

import { chatbotApi } from '../chatbot';
import { conversationApi } from '../conversations';

describe('API Module Structure Tests', () => {
  describe('chatbotApi', () => {
    it('should have all required methods', () => {
      expect(chatbotApi).toHaveProperty('getChatbots');
      expect(chatbotApi).toHaveProperty('getChatbot');
      expect(chatbotApi).toHaveProperty('createChatbot');
      expect(chatbotApi).toHaveProperty('updateChatbot');
      expect(chatbotApi).toHaveProperty('deleteChatbot');
      expect(chatbotApi).toHaveProperty('healthCheck');
    });

    it('should have functions as methods', () => {
      expect(typeof chatbotApi.getChatbots).toBe('function');
      expect(typeof chatbotApi.getChatbot).toBe('function');
      expect(typeof chatbotApi.createChatbot).toBe('function');
      expect(typeof chatbotApi.updateChatbot).toBe('function');
      expect(typeof chatbotApi.deleteChatbot).toBe('function');
      expect(typeof chatbotApi.healthCheck).toBe('function');
    });
  });

  describe('conversationApi', () => {
    it('should have all required methods', () => {
      expect(conversationApi).toHaveProperty('sendMessage');
      expect(conversationApi).toHaveProperty('getConversations');
      expect(conversationApi).toHaveProperty('getConversationCount');
      expect(conversationApi).toHaveProperty('getAnalyticsDashboard');
      expect(conversationApi).toHaveProperty('getIntentAnalytics');
      expect(conversationApi).toHaveProperty('addFeedback');
      expect(conversationApi).toHaveProperty('testConnection');
    });

    it('should have functions as methods', () => {
      expect(typeof conversationApi.sendMessage).toBe('function');
      expect(typeof conversationApi.getConversations).toBe('function');
      expect(typeof conversationApi.getConversationCount).toBe('function');
      expect(typeof conversationApi.getAnalyticsDashboard).toBe('function');
      expect(typeof conversationApi.getIntentAnalytics).toBe('function');
      expect(typeof conversationApi.addFeedback).toBe('function');
      expect(typeof conversationApi.testConnection).toBe('function');
    });
  });

  describe('API Error Handling', () => {
    it('should return functions that return promises', () => {
      // All API methods should return promises
      const methods = [
        chatbotApi.healthCheck,
        conversationApi.testConnection,
      ];

      methods.forEach((method) => {
        const result = method();
        expect(result).toHaveProperty('then');
        expect(result).toHaveProperty('catch');
      });
    });
  });
});

describe('API Response Structure Tests', () => {
  describe('healthCheck', () => {
    it('should return a properly structured health check response', async () => {
      const result = await chatbotApi.healthCheck();

      expect(result).toHaveProperty('status');
      expect(['healthy', 'degraded']).toContain(result.status);

      if (result.status === 'healthy') {
        expect(result).toHaveProperty('services');
      }

      if (result.status === 'degraded') {
        expect(result).toHaveProperty('error');
      }
    });
  });

  describe('testConnection', () => {
    it('should return a properly structured connection test response', async () => {
      const result = await conversationApi.testConnection();

      expect(result).toHaveProperty('success');
      expect(typeof result.success).toBe('boolean');

      if (result.success) {
        expect(result).toHaveProperty('responseTime');
        expect(typeof result.responseTime).toBe('number');
      }

      if (!result.success) {
        expect(result).toHaveProperty('error');
      }
    });
  });
});

