/**
 * Production-safe logging utility
 * Provides consistent logging interface that automatically disables in production
 */

import { env } from '@/config/env';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  [key: string]: unknown;
}

class Logger {
  private isDevelopment = env.app.isDevelopment;

  /**
   * Debug level logging - only visible in development
   */
  debug(message: string, context?: LogContext): void {
    if (!this.isDevelopment) return;
    console.debug('🔍 [DEBUG]', message, context ? context : '');
  }

  /**
   * Info level logging - only visible in development
   */
  info(message: string, context?: LogContext): void {
    if (!this.isDevelopment) return;
    console.info('ℹ️ [INFO]', message, context ? context : '');
  }

  /**
   * Warning level logging - visible in all environments
   */
  warn(message: string, context?: LogContext): void {
    console.warn('⚠️ [WARN]', message, context ? context : '');
  }

  /**
   * Error level logging - visible in all environments
   */
  error(message: string, error?: Error | unknown, context?: LogContext): void {
    console.error('❌ [ERROR]', message, error, context ? context : '');
  }

  /**
   * API request logging - only in development
   */
  api(method: string, url: string, context?: LogContext): void {
    if (!this.isDevelopment) return;
    console.log(`🔗 [API] ${method.toUpperCase()} ${url}`, context ? context : '');
  }

  /**
   * API response logging - only in development
   */
  apiResponse(
    method: string,
    url: string,
    status: number,
    duration?: number,
    context?: LogContext
  ): void {
    if (!this.isDevelopment) return;
    const durationStr = duration ? ` (${duration}ms)` : '';
    const statusEmoji = status >= 400 ? '❌' : status >= 300 ? '🔄' : '✅';
    console.log(
      `${statusEmoji} [API] ${method.toUpperCase()} ${url} ${status}${durationStr}`,
      context ? context : ''
    );
  }

  /**
   * Performance logging - only in development
   */
  performance(operation: string, duration: number, context?: LogContext): void {
    if (!this.isDevelopment) return;
    const emoji = duration > 1000 ? '🐌' : duration > 500 ? '⏳' : '⚡';
    console.log(`${emoji} [PERF] ${operation}: ${duration.toFixed(2)}ms`, context ? context : '');
  }

  /**
   * User action logging - only in development
   */
  userAction(action: string, context?: LogContext): void {
    if (!this.isDevelopment) return;
    console.log(`👤 [USER] ${action}`, context ? context : '');
  }

  /**
   * Create a child logger with a specific prefix
   */
  child(prefix: string): Logger {
    const childLogger = new Logger();
    const originalMethods = {
      debug: childLogger.debug.bind(childLogger),
      info: childLogger.info.bind(childLogger),
      warn: childLogger.warn.bind(childLogger),
      error: childLogger.error.bind(childLogger),
      api: childLogger.api.bind(childLogger),
      apiResponse: childLogger.apiResponse.bind(childLogger),
      performance: childLogger.performance.bind(childLogger),
      userAction: childLogger.userAction.bind(childLogger),
    };

    childLogger.debug = (message: string, context?: LogContext) =>
      originalMethods.debug(`[${prefix}] ${message}`, context);
    childLogger.info = (message: string, context?: LogContext) =>
      originalMethods.info(`[${prefix}] ${message}`, context);
    childLogger.warn = (message: string, context?: LogContext) =>
      originalMethods.warn(`[${prefix}] ${message}`, context);
    childLogger.error = (message: string, error?: Error | unknown, context?: LogContext) =>
      originalMethods.error(`[${prefix}] ${message}`, error, context);
    childLogger.api = (method: string, url: string, context?: LogContext) =>
      originalMethods.api(method, url, { prefix, ...context });
    childLogger.apiResponse = (
      method: string,
      url: string,
      status: number,
      duration?: number,
      context?: LogContext
    ) => originalMethods.apiResponse(method, url, status, duration, { prefix, ...context });
    childLogger.performance = (operation: string, duration: number, context?: LogContext) =>
      originalMethods.performance(`${prefix} ${operation}`, duration, context);
    childLogger.userAction = (action: string, context?: LogContext) =>
      originalMethods.userAction(action, { prefix, ...context });

    return childLogger;
  }
}

/**
 * Global logger instance
 * Use this instead of console.log/console.error directly
 */
export const logger = new Logger();

/**
 * Create a logger for a specific module/component
 * Usage: const log = logger.child('ChatWidget');
 */
export const createLogger = (prefix: string) => logger.child(prefix);
