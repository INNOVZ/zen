/**
 * Schema Types - Compatibility Shim
 * 
 * @deprecated Import from specific type modules instead
 * This file exists for backward compatibility with existing imports.
 * 
 * @example
 * ```typescript
 * // Old way (still works)
 * import type { User, ConversationInfo, UploadFile } from '@/types/schemaTypes';
 * 
 * // New way (preferred)
 * import type { User } from '@/types/common/user';
 * import type { ConversationInfo } from '@/types/conversation';
 * import type { UploadFile } from '@/types/api';
 * ```
 */

// Re-export User from common/user
export type { UserInfo as User } from "./common/user";

// Re-export ConversationInfo from conversation
export type { ConversationInfo } from "./conversation";

// Re-export UploadFile and ChatbotInfo from api/chat

export type { UploadFile, ChatbotInfo } from "./api/chat";
