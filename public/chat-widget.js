// ZaaKy AI Chatbot Widget v3.0 - Production Ready
// Works with dynamic script loading, Next.js, React, and all modern frameworks
(function () {
  'use strict';

  // Production-safe: All console logs disabled
  // To enable debug mode, set DEBUG = true and uncomment the logger calls
  const DEBUG = false;

  // Robust script tag detection - works with dynamic loading
  function getScriptTag() {
    // Try document.currentScript first
    if (document.currentScript) {
      return document.currentScript;
    }

    // Fallback: find the script tag by src
    const scripts = document.querySelectorAll('script[src*="chat-widget.js"]');
    if (scripts.length > 0) {
      return scripts[scripts.length - 1]; // Get the most recently added one
    }

    return null;
  }

  const scriptTag = getScriptTag();

  // Configuration with fallbacks
  function normalizeLanguage(lang) {
    if (!lang) return 'en';
    return String(lang).trim().split('-')[0].toLowerCase() || 'en';
  }

  let storedLanguage = null;
  try {
    storedLanguage = localStorage.getItem('chatbot_language');
  } catch {
    storedLanguage = null;
  }

  const browserLanguage = (typeof navigator !== 'undefined' && navigator.language)
    ? normalizeLanguage(navigator.language)
    : 'en';
  const config = {
    apiUrl: scriptTag?.getAttribute('data-api-url') || '', // URL must be provided via data attribute
    position: scriptTag?.getAttribute('data-position') || 'bottom-right',
    chatbotId: scriptTag?.getAttribute('data-chatbot-id') || null,
    primaryColor: scriptTag?.getAttribute('data-primary-color') || '#3B82F6',
    botName: scriptTag?.getAttribute('data-bot-name') || 'Assistant',
    greeting: scriptTag?.getAttribute('data-greeting') || 'Hi! How can I help you today?',
    avatarUrl: scriptTag?.getAttribute('data-avatar-url') || null,
    welcomeMessage: scriptTag?.getAttribute('data-welcome-message') || null,
    showWelcome: (scriptTag?.getAttribute('data-show-welcome') || 'true') !== 'false',
    language: normalizeLanguage(
      scriptTag?.getAttribute('data-language') || storedLanguage || browserLanguage
    )
  };

  // Validate required config
  if (!config.chatbotId) {
    // Critical error - show alert in development only
    if (DEBUG) alert('ERROR: data-chatbot-id is required! Please set it on the script tag.');
    return;
  }

  if (!config.apiUrl) {
    if (DEBUG) alert('ERROR: data-api-url is required! Please set it on the script tag.');
    console.error('ZaaKy Widget: data-api-url is missing');
    return;
  }

  // State
  let selectedChatbot = null;
  let conversationId = null;
  let isWidgetCreated = false;
  let ctaButtons = [];

  // Session storage keys
  const STORAGE_PREFIX = `zaakiy_chat_${config.chatbotId}_`;
  const CONVERSATION_ID_KEY = STORAGE_PREFIX + 'conversation_id';
  const MESSAGES_KEY = STORAGE_PREFIX + 'messages';
  const SESSION_TIMESTAMP_KEY = STORAGE_PREFIX + 'timestamp';

  // Convert legacy Supabase URLs to proxy URLs and ensure full URLs
  function convertLegacyUrl(url) {
    if (!url) return null;

    // Normalize input
    const urlStr = String(url).trim();
    if (urlStr === 'null' || urlStr === 'undefined' || urlStr === '') return null;

    // If URL is already absolute (starts with http:// or https://), return as-is
    // Priority: Absolute URLs should be respected to prevent breaking valid direct links
    if (urlStr.startsWith('http://') || urlStr.startsWith('https://')) {
      // Robustness: If the current page is HTTPS, upgrading HTTP to HTTPS prevents Mixed Content blocking
      if (window.location.protocol === 'https:' && urlStr.startsWith('http://')) {
        return urlStr.replace('http://', 'https://');
      }
      return urlStr;
    }

    // Handle legacy Supabase storage URLs (only for relative paths or specific legacy format)
    if (urlStr.includes('storage/v1/object/uploads/')) {
      const pathParts = urlStr.split('storage/v1/object/uploads/');
      if (pathParts.length > 1) {
        const filePath = pathParts[1];
        return `${config.apiUrl}/api/uploads/avatar/legacy/${filePath}`;
      }
    }

    // If URL is relative (starts with /), prepend the API base URL
    if (urlStr.startsWith('/')) {
      return `${config.apiUrl}${urlStr}`;
    }

    // Otherwise, assume it's a relative path and prepend the API URL
    return `${config.apiUrl}/${urlStr}`;
  }

  // Helper function to create avatar placeholder element
  function createAvatarPlaceholder(isHeader = false) {
    const placeholder = document.createElement('div');
    placeholder.className = isHeader ? 'zaakiy-avatar-placeholder' : 'zaakiy-message-avatar-placeholder';
    const svgSize = isHeader ? '16' : '12';
    const fillColor = isHeader ? 'white' : '#6b7280';
    placeholder.innerHTML = `
      <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="${fillColor}">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
      </svg>
    `;
    return placeholder;
  }

  // Helper function to create avatar image with error handling
  function createAvatarImage(avatarUrl, botName, isHeader = false) {
    if (!avatarUrl) {
      return createAvatarPlaceholder(isHeader);
    }

    const convertedUrl = convertLegacyUrl(avatarUrl);
    if (!convertedUrl) {
      return createAvatarPlaceholder(isHeader);
    }

    const img = document.createElement('img');
    img.className = isHeader ? 'zaakiy-avatar' : 'zaakiy-message-avatar';
    img.alt = botName || 'Bot';

    // IMPORTANT: Do NOT set crossOrigin="anonymous" here.
    // 1. We are only displaying the image, not manipulating it on a canvas.
    // 2. Setting crossOrigin requires the server to send CORS headers. If they are missing, Chrome blocks the image completely.
    // 3. By not setting it, we get a standard "opaque" image load which works fine for display even without CORS headers.

    // Add error handler to fallback to placeholder if image fails to load
    img.onerror = function () {
      // If image fails to load (404, network error, etc.), show placeholder
      const placeholder = createAvatarPlaceholder(isHeader);
      if (img.parentNode) {
        img.parentNode.replaceChild(placeholder, img);
      }
    };

    // Set src immediately
    img.src = convertedUrl;

    return img;
  }

  // Load saved session data
  function loadSavedSession() {
    try {
      // Load conversation ID
      const savedConversationId = localStorage.getItem(CONVERSATION_ID_KEY);
      if (savedConversationId) {
        conversationId = savedConversationId;
      }

      // Load messages
      const savedMessages = localStorage.getItem(MESSAGES_KEY);
      const savedTimestamp = localStorage.getItem(SESSION_TIMESTAMP_KEY);

      if (savedMessages && savedTimestamp) {
        // Check if session is still valid (24 hours)
        const sessionAge = Date.now() - parseInt(savedTimestamp);
        const maxSessionAge = 24 * 60 * 60 * 1000; // 24 hours

        if (sessionAge < maxSessionAge) {
          const messages = JSON.parse(savedMessages);
          return messages;
        } else {
          clearSavedSession();
        }
      }
    } catch {
      // Silently fail and start fresh session
    }

    return [];
  }

  // Save session data
  function saveSession(messages) {
    try {
      if (conversationId) {
        localStorage.setItem(CONVERSATION_ID_KEY, conversationId);
      }

      // Only save the last 50 messages to avoid storage limits
      const messagesToSave = messages.slice(-50);
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messagesToSave));
      localStorage.setItem(SESSION_TIMESTAMP_KEY, Date.now().toString());
    } catch {
      // Silently fail
    }
  }

  // Clear saved session
  function clearSavedSession() {
    try {
      localStorage.removeItem(CONVERSATION_ID_KEY);
      localStorage.removeItem(MESSAGES_KEY);
      localStorage.removeItem(SESSION_TIMESTAMP_KEY);
    } catch {
      // Silently fail
    }
  }

  // Create widget HTML
  function createWidget() {
    if (isWidgetCreated) {
      return;
    }

    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'zaakiy-chat-widget';
    widgetContainer.innerHTML = `
      <style>
        #zaakiy-chat-widget {
          position: fixed;
          ${config.position.includes('right') ? 'right: 33px;' : 'left: 33px;'}
          bottom: 33px;
          z-index: 999999;
          font-family: "Poppins", sans-serif !important;
          display: flex;
          flex-direction: column;
          align-items: ${config.position.includes('right') ? 'flex-end' : 'flex-start'};
        }
        
        .zaakiy-chat-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: ${config.primaryColor};
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }
        
        .zaakiy-chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        
        .zaakiy-chat-window {
          width: 380px !important;
          max-width: calc(100vw - 20px);
          height: 75vh;
          max-height: calc(100vh - 120px);
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          display: none;
          flex-direction: column;
          overflow: hidden;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          #zaakiy-chat-widget {
            right: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            top: 0 !important;
            align-items: flex-end;
            justify-content: center;
            /* Ensure widget doesn't exceed viewport */
            width: 100vw;
            max-width: 100vw;
            height: 100vh;
            height: 100dvh; /* Use dynamic viewport height for mobile browsers */
            max-height: 100vh;
            max-height: 100dvh;
            pointer-events: none; /* Allow clicks to pass through container */
          }
          
          .zaakiy-chat-window {
            width: 100% !important;
            max-width: 100% !important;
            /* Use dvh which accounts for browser UI changes */
            height: calc(100dvh - 20px) !important;
            max-height: calc(100dvh - 20px) !important;
            /* Uniform margins - use same value for left and right */
            margin: 0 !important;
            margin-top: max(10px, calc(1px + env(safe-area-inset-top, 0px))) !important;
            margin-bottom: max(10px, calc(1px + env(safe-area-inset-bottom, 0px))) !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            border-radius: 16px 16px 0 0 !important;
            /* Ensure header is always visible */
            position: relative;
            overflow: hidden;
            pointer-events: auto; /* Re-enable pointer events on chat window */
            /* Ensure chat window starts from top with proper spacing */
            align-self: flex-start;
          }
          
          /* When chat is open on mobile, ensure proper full-height */
          .zaakiy-chat-window.zaakiy-mobile-open {
            height: calc(100dvh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px) - 20px) !important;
            max-height: calc(100dvh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px) - 20px) !important;
            margin-top: max(10px, calc(10px + env(safe-area-inset-top, 0px))) !important;
            margin-bottom: max(10px, calc(10px + env(safe-area-inset-bottom, 0px))) !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          .zaakiy-chat-button {
            align-self: ${config.position.includes('right') ? 'flex-end' : 'flex-start'};
            margin: 10px;
            margin-bottom: max(10px, calc(10px + env(safe-area-inset-bottom, 0px)));
            position: absolute;
            bottom: 0;
            ${config.position.includes('right') ? 'right: 10px;' : 'left: 10px;'}
            z-index: 1000001;
            pointer-events: auto; /* Ensure button is clickable */
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
          }
          
          /* Hide chat button when chat window is open on mobile (CSS fallback) */
          /* Note: JavaScript handles this for better compatibility */
          #zaakiy-chat-widget:has(.zaakiy-chat-window[style*="flex"]) .zaakiy-chat-button {
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            transform: scale(0.8);
          }
        }
        
        @media (max-width: 480px) {
          .zaakiy-chat-window {
            border-top-left-radius: 12px !important;
            border-top-right-radius: 12px !important;
            /* Full height on small screens */
            height: calc(100dvh - 20px) !important;
            max-height: calc(100dvh - 20px) !important;
            /* Uniform margins */
            margin: 0 !important;
            margin-top: max(10px, calc(10px + env(safe-area-inset-top, 0px))) !important;
            margin-bottom: max(10px, calc(10px + env(safe-area-inset-bottom, 0px))) !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          .zaakiy-chat-window.zaakiy-mobile-open {
            height: calc(100dvh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px) - 20px) !important;
            max-height: calc(100dvh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px) - 20px) !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          .zaakiy-chat-button {
            width: 56px;
            height: 56px;
          }
        }
        
        .zaakiy-chat-header {
          background: ${config.primaryColor} !important;
          color: white !important;
          padding: 20px 16px !important;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          /* Ensure header stays visible and not cut off */
          position: sticky;
          top: 0;
          z-index: 10;
          /* Add safe area padding for mobile devices with notches */
          padding-top: calc(20px + env(safe-area-inset-top, 0px)) !important;
          /* Use consistent horizontal padding - ignore safe-area-inset for uniformity */
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
        
        /* Mobile-specific: Ensure uniform header padding */
        @media (max-width: 768px) {
          .zaakiy-chat-header {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
        
        .zaakiy-chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }
          .zaakiy-bot-name-container {
            display: flex;
            align-items: center;
            gap: 6px !important;
            min-width: 0;
          }
        
        .zaakiy-bot-name-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }
        #zaakiy-bot-name {
         font-family: "Ubuntu", sans-serif;
         font-weight: 700 !important;
        }
        
        @media (max-width: 480px) {
          .zaakiy-chat-header {
            padding: 14px !important;
            /* Ensure header padding accounts for safe areas on small screens */
            padding-top: calc(14px + env(safe-area-inset-top, 0px)) !important;
            /* Uniform horizontal padding */
            padding-left: 14px !important;
            padding-right: 14px !important;
            /* Ensure header is always visible on mobile */
            min-height: calc(60px + env(safe-area-inset-top, 0px));
          }
          
          .zaakiy-chat-header-info {
            gap: 10px;
          }
        }
        
        .zaakiy-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          // border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .zaakiy-avatar-placeholder {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .zaakiy-chat-messages {
          flex: 1;
          padding: 15px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          overflow-y: auto;
          overflow-x: hidden;
          background: #f8f9fa !important;
          scroll-behavior: smooth;
        }
        
        /* Ensure uniform padding on mobile */
        @media (max-width: 768px) {
          .zaakiy-chat-messages {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
        }
        
        /* Scrollbar styling */
        .zaakiy-chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        
        .zaakiy-chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .zaakiy-chat-messages::-webkit-scrollbar-thumb {
          background: #cbd5e1 !important;
          border-radius: 3px;
        }
        
        .zaakiy-chat-messages::-webkit-scrollbar-thumb:hover {
          background: #94a3b8 !important;
        }
        
        @media (max-width: 480px) {
          .zaakiy-chat-messages {
            padding: 12px !important;
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
        
        .zaakiy-message {
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        
        .zaakiy-message.user {
          flex-direction: row-reverse;
        }
        
        .zaakiy-message-content-wrapper {
          display: flex;
          flex-direction: column;
          max-width: 85%;
        }
        
        .zaakiy-message.user .zaakiy-message-content-wrapper {
          align-items: flex-end;
          max-width: 85%;
        }
        
        .zaakiy-message.bot .zaakiy-message-content-wrapper {
          align-items: flex-start;
          max-width: 85%;
        }
        
        .zaakiy-message-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .zaakiy-message-avatar-placeholder {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .zaakiy-message-timestamp {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 4px;
          padding-left: 4px;
          padding-right: 4px;
        }
        
        .zaakiy-message-content {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px !important;
          line-height: 1.45 !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word;
        }

        .zaakiy-message-buttons {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .zaakiy-message-button {
          border: 1px solid var(--zaakiy-primary-color, #3B82F6);
          background: #ffffff;
          color: var(--zaakiy-primary-color, #3B82F6);
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 12px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .zaakiy-message-button:hover {
          background: rgba(59, 130, 246, 0.08);
        }

        .zaakiy-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 8px;
        }

        .zaakiy-cta-button {
          background: ${config.primaryColor} !important;
          color: var(--zaakiy-primary-color, #fff);
          padding: 4px 8px;
          border-radius: 7px;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .zaakiy-cta-button:hover {
          background: rgba(59, 130, 246, 0.08);
        }
        
        .zaakiy-message-content a {
          color: ${config.primaryColor} !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          transition: all 0.2s ease;
          border-bottom: 1px solid ${config.primaryColor};
        }
        
        .zaakiy-message-content a:hover {
          opacity: 0.8;
          border-bottom: 2px solid ${config.primaryColor};
        }
        
        .zaakiy-message-content strong {
          font-weight: 700;
          color: #1a1a1a !important;
        }
        
        .zaakiy-message-content em {
          font-style: italic;
          opacity: 0.9;
        }
        
        .zaakiy-message-content br {
          line-height: 0.5;
        }
        
        /* Bot messages - explicit styling to prevent brand color inheritance */
        .zaakiy-message.bot .zaakiy-message-content {
          background: white !important;
          border: 1px solid #e1e5e9 !important;
          color: #1a1a1a !important; /* Explicit dark text color */
          /* Prevent any color inheritance from parent elements */
          isolation: isolate;
        }
        
        /* Links in bot messages should use primary color (override the general rule) */
        .zaakiy-message.bot .zaakiy-message-content a {
          color: ${config.primaryColor} !important;
        }
        
        /* Strong text in bot messages */
        .zaakiy-message.bot .zaakiy-message-content strong {
          color: #1a1a1a !important;
          font-weight: 700 !important;
        }
        
        /* Ensure paragraphs and divs in bot messages use correct color */
        .zaakiy-message.bot .zaakiy-message-content p,
        .zaakiy-message.bot .zaakiy-message-content div {
          color: #1a1a1a !important;
        }
        
        .zaakiy-message.user .zaakiy-message-content {
          background: ${config.primaryColor};
          color: white;
        }
        
        .zaakiy-chat-input {
          padding: 15px;
          padding-left: 15px !important;
          padding-right: 15px !important;
          border-top: 1px solid #e1e5e9;
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: white;
          flex-shrink: 0;
        }
        .zaakiy-cta-container { 
          width: 100%;
        }
        .zaakiy-chat-input-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
        } 
        
        /* Ensure uniform input padding on mobile */
        @media (max-width: 768px) {
          .zaakiy-chat-input {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
        }
        
        .zaakiy-input-field {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid #e1e5e9;
          border-radius: 10px;
          outline: none;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        
        .zaakiy-input-field:focus {
          border-color: ${config.primaryColor};
        }
        
        .zaakiy-input-field:disabled {
          background: #f3f4f6;
          color: #9ca3af;
          cursor: not-allowed;
          opacity: 0.7;
        }
        
        .zaakiy-send-button {
          background: ${config.primaryColor};
          border: none;
          border-radius: 10px;
          width: 40px;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        
        .zaakiy-send-button:hover:not(:disabled) {
          opacity: 0.9;
          transform: scale(1.05);
        }
        
        .zaakiy-send-button:active:not(:disabled) {
          transform: scale(0.95);
        }
        
        .zaakiy-send-button:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        
        /* Mobile message adjustments */
        @media (max-width: 480px) {
          .zaakiy-message-content {
            font-size: 14px;
            padding: 8px 12px;
          }
          
          .zaakiy-chat-input {
            padding: 12px !important;
            padding-left: 12px !important;
            padding-right: 12px !important;
            gap: 8px;
          }
          
          .zaakiy-input-field {
            font-size: 16px; /* Prevents zoom on iOS */
            padding: 10px 12px;
          }
          
          .zaakiy-send-button {
            width: 38px;
            height: 38px;
          }
        }
        
        .zaakiy-close-button {
          background: rgba(255, 255, 255, 0.87);
          border: none;
          color:${config.primaryColor};
          cursor: pointer;
          font-size: 12px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        
        .zaakiy-close-button:hover {
           background: rgb(255, 255, 255);
          transform: scale(1.05);
        }
        
        .zaakiy-close-button:active {
          transform: scale(0.95);
        }
        
        @media (max-width: 480px) {
          .zaakiy-close-button {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }
        }
        
        /* Welcome overlay - compact horizontal pill */
        .zaakiy-welcome-overlay {
          position: absolute;
          bottom: 90px; /* above the chat button */
          ${config.position.includes('right') ? 'right: 0;' : 'left: 0;'}
          max-width: min(430px, calc(100vw - 24px));
          background: #ffffff;
          color: #0f172a;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          box-shadow: 0 8px 20px rgba(2, 6, 23, 0.12);
          padding: 8px 12px; /* even left/right so no extra right whitespace */
          z-index: 1000000;
          display: inline-flex;
          align-items: center;
          gap: 0; /* no internal gap since close button is outside */
          pointer-events: auto !important; /* Ensure overlay is clickable */
        }

        .zaakiy-welcome-text {
          font-size: 14px;
          line-height: 1.25;
          max-width: 100%;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 480px) {
          .zaakiy-welcome-overlay {
            bottom: 80px;
            ${config.position.includes('right') ? 'right: 10px;' : 'left: 10px;'}
            padding: 7px 12px;
            /* Ensure overlay is clickable on mobile */
            pointer-events: auto !important;
            z-index: 1000000;
          }
          .zaakiy-welcome-text {
            font-size: 13px;
            max-width: 100%;
          }
          .zaakiy-welcome-close {
            top: -42px; /* Position above overlay with more space */
            height: 30px; /* Larger touch target on mobile */
            min-height: 30px; /* Minimum touch target size for accessibility */
            width: auto;
            min-width: 70px; /* Larger minimum width for mobile - easier to tap */
            padding: 0 16px; /* More padding for easier tapping */
            font-size: 13px; /* Slightly larger text */
            /* Ensure button is clickable */
            pointer-events: auto !important;
            z-index: 1000002; /* Higher z-index than overlay */
            position: absolute !important; /* Keep absolute positioning */
            /* Ensure button is always visible and clickable */
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
            touch-action: manipulation;
          }
        }
        
        /* Mobile-specific: Better positioning for welcome close button */
        @media (max-width: 768px) {
          .zaakiy-welcome-overlay {
            pointer-events: auto !important;
            z-index: 1000000;
          }
          .zaakiy-welcome-close {
            pointer-events: auto !important;
            z-index: 1000002;
            /* Ensure button is always clickable */
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.2);
            touch-action: manipulation;
          }
        }
        
        .zaakiy-welcome-overlay .zaakiy-welcome-text a {
          color: ${config.primaryColor};
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid ${config.primaryColor};
        }
        
        .zaakiy-welcome-close {
          position: absolute;
          top: -38px;
          ${config.position.includes('right') ? 'right: 0px;' : 'left: 16px;'}
          width: auto;
          min-width: 44px; /* Minimum touch target size for mobile */
         
          padding: 7px 12px;
          border-radius: 9999px;
          border: none;
          background: ${config.primaryColor};
          color: #ffffff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
          transition: filter 0.15s ease;
          z-index: 1000001; /* Ensure it's above other elements */
          pointer-events: auto !important; /* Ensure clicks work */
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); /* Mobile tap feedback */
          touch-action: manipulation; /* Improve touch responsiveness */
        }
        
        .zaakiy-welcome-close:hover { 
          filter: brightness(0.92); 
        }
        
        .zaakiy-welcome-close:active {
          filter: brightness(0.85);
          transform: scale(0.95);
        }
        
        
        .zaakiy-typing {
          display: flex;
          gap: 4px;
          padding: 10px 12px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e1e5e9;
          max-width: 60px;
        }
        
        .zaakiy-typing-dot {
          width: 6px;
          height: 6px;
          background: #999;
          border-radius: 50%;
          animation: zaakiy-bounce 1.4s infinite ease-in-out both;
        }
        
        .zaakiy-typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .zaakiy-typing-dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes zaakiy-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        @keyframes zaakiy-slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes zaakiy-slideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
        }
        
        .zaakiy-chat-window.zaakiy-opening {
          animation: zaakiy-slideIn 0.3s ease forwards;
        }
        
        .zaakiy-chat-window.zaakiy-closing {
          animation: zaakiy-slideOut 0.2s ease forwards;
        }
          .zaakiy-powered-by {
            font-size: 12px;
            color: #333;    
            text-align: center;
            padding: 2px 15px !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
            margin: 0;
            margin-bottom: 5px !important;
            background: white;
            flex-shrink: 0;
          }
          
          /* Ensure uniform padding for powered-by text on mobile */
          @media (max-width: 768px) {
            .zaakiy-powered-by {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
          }
          
          @media (max-width: 480px) {
            .zaakiy-powered-by {
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
          }
          .zaakiy-powered-by:hover {
            color: #0a0a60;
          }
          .zaakiy-powered-by:active {
            color: #000;
          }
          .zaakiy-powered-by:focus {
            color:  #0a0a60;
          }
          .zaakiy-powered-by:visited {
            color: #000;
          }
          .zaakiy-powered-by:link {
            color: #000;
          }
      </style>
      
      <div class="zaakiy-chat-window" id="zaakiy-chat-window">
        <div class="zaakiy-chat-header">
          <div class="zaakiy-chat-header-info">
            <div id="zaakiy-avatar-container">
              <div class="zaakiy-avatar-placeholder">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
                </svg>
              </div>
            </div>
            <div class="zaakiy-bot-name-container">
              <span id="zaakiy-bot-name">${config.botName}</span>
              <div style="width: 8px; height: 8px; background: #4ade80; border-radius: 50%; margin-bottom: 2px;"></div>
            </div>
          </div>
          <button class="zaakiy-close-button" onclick="window.zaakiyCloseChat()">X</button>
        </div>
        
        <div class="zaakiy-chat-messages" id="zaakiy-messages">
          <div class="zaakiy-message bot">
            <div class="zaakiy-message-content" id="zaakiy-greeting"></div>
          </div>
        </div>
        
        <div class="zaakiy-chat-input">
          <div class="zaakiy-cta-container">
            <div class="zaakiy-cta-buttons" id="zaakiy-cta-buttons" style="display: none;"></div>
          </div>
          <div class="zaakiy-chat-input-container">
          <input 
            type="text" 
            class="zaakiy-input-field" 
            id="zaakiy-input"
            placeholder="Type your message..."
            onkeypress="if(event.key==='Enter') window.zaakiySendMessage()"
          />
          <button class="zaakiy-send-button" onclick="window.zaakiySendMessage()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
          </div>
        </div>
        <p class="zaakiy-powered-by">Conversations powered by Zaakiy AI</p>
      </div>
      
      
      <button class="zaakiy-chat-button" onclick="window.zaakiyToggleChat()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>
      
      <div class="zaakiy-welcome-overlay" id="zaakiy-welcome-overlay" style="display: none;">
        <div class="zaakiy-welcome-text" id="zaakiy-welcome-text"></div>
        <button 
          class="zaakiy-welcome-close" 
          onclick="window.zaakiyCloseWelcome(event); return false;"
          ontouchstart="window.zaakiyCloseWelcome(event); return false;"
          aria-label="Close welcome message"
          type="button"
        >Close</button>
      </div>
    `;

    document.body.appendChild(widgetContainer);
    widgetContainer.style.setProperty('--zaakiy-primary-color', config.primaryColor);
    isWidgetCreated = true;

    // Add event listener for welcome close button (more reliable than onclick on mobile)
    function setupWelcomeCloseButton() {
      const welcomeCloseBtn = document.querySelector('.zaakiy-welcome-close');
      if (welcomeCloseBtn) {
        // Remove existing onclick to avoid double-firing
        welcomeCloseBtn.removeAttribute('onclick');
        welcomeCloseBtn.removeAttribute('ontouchstart');

        // Clear any existing listeners by cloning and replacing
        const newBtn = welcomeCloseBtn.cloneNode(true);
        welcomeCloseBtn.parentNode.replaceChild(newBtn, welcomeCloseBtn);

        // Add event listeners for both click and touch
        newBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.zaakiyCloseWelcome(e);
          return false;
        }, { passive: false, capture: true });

        newBtn.addEventListener('touchend', function (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.zaakiyCloseWelcome(e);
          return false;
        }, { passive: false, capture: true });

        // Also handle touchstart to prevent default behaviors
        newBtn.addEventListener('touchstart', function (e) {
          // Don't prevent default here, just stop propagation
          e.stopPropagation();
        }, { passive: true });

        // Ensure button is clickable
        newBtn.style.pointerEvents = 'auto';
        newBtn.style.cursor = 'pointer';
        newBtn.style.userSelect = 'none';
        newBtn.style.webkitUserSelect = 'none';
      }
    }

    // Setup button immediately and also after a delay (in case DOM isn't ready)
    setupWelcomeCloseButton();
    setTimeout(setupWelcomeCloseButton, 100);
    setTimeout(setupWelcomeCloseButton, 500); // Also try after longer delay

    // Handle message button clicks (booking slots, quick replies)
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (messagesContainer) {
      messagesContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (!target || !target.classList) return;
        if (!target.classList.contains('zaakiy-message-button')) return;
        const value = target.getAttribute('data-value') || target.textContent || '';
        if (!value) return;
        const inputField = document.getElementById('zaakiy-input');
        if (inputField && inputField.disabled) return;
        window.zaakiySendMessage(value);
      });
    }

    // Initialize button state on mobile
    const chatButton = widgetContainer.querySelector('.zaakiy-chat-button');
    const chatWindow = widgetContainer.querySelector('.zaakiy-chat-window');
    if (window.innerWidth <= 768 && chatButton && chatWindow) {
      // Ensure button is visible when chat is closed
      const isOpen = chatWindow.style.display === 'flex';
      if (!isOpen) {
        chatButton.style.opacity = '1';
        chatButton.style.visibility = 'visible';
        chatButton.style.pointerEvents = 'auto';
        chatButton.style.transform = 'scale(1)';
      }
    }

    // Handle window resize to maintain button state
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const chatBtn = document.querySelector('.zaakiy-chat-button');
        const chatWin = document.getElementById('zaakiy-chat-window');
        if (window.innerWidth <= 768 && chatBtn && chatWin) {
          const isOpen = chatWin.style.display === 'flex';
          if (isOpen) {
            // Chat is open, hide button
            chatBtn.style.opacity = '0';
            chatBtn.style.visibility = 'hidden';
            chatBtn.style.pointerEvents = 'none';
          } else {
            // Chat is closed, show button
            chatBtn.style.opacity = '1';
            chatBtn.style.visibility = 'visible';
            chatBtn.style.pointerEvents = 'auto';
          }
        }
      }, 100);
    });

    // Load saved session and restore messages
    const savedMessages = loadSavedSession();

    if (savedMessages && savedMessages.length > 0) {
      // Restore saved messages
      const messagesContainer = document.getElementById('zaakiy-messages');
      if (messagesContainer) {
        // Clear default greeting
        messagesContainer.innerHTML = '';

        // Restore each message
        savedMessages.forEach(msg => {
          // Pass isHtml flag to preserve formatting for bot messages
          // Pass timestamp if available
          const timestamp = msg.timestamp ? new Date(msg.timestamp) : null;
          zaakiyAddMessage(
            msg.content,
            msg.type,
            false,
            msg.isHtml || false,
            timestamp,
            msg.buttons || []
          );
        });
      }
    } else {
      // Set initial greeting for new session with markdown parsing
      const greetingEl = document.getElementById('zaakiy-greeting');
      if (greetingEl) greetingEl.innerHTML = parseMarkdown(config.greeting);
    }

    // Initialize welcome overlay
    const welcomeEl = document.getElementById('zaakiy-welcome-overlay');
    const welcomeText = document.getElementById('zaakiy-welcome-text');
    if (welcomeEl && welcomeText) {
      if (config.showWelcome) {
        const message = config.welcomeMessage || config.greeting;
        welcomeText.innerHTML = parseMarkdown(message);
        welcomeEl.style.display = 'block';
        // Re-setup close button when overlay is shown
        setTimeout(setupWelcomeCloseButton, 50);
      } else {
        welcomeEl.style.display = 'none';
      }
    }
  }

  // Load chatbot configuration
  async function loadChatbotConfig() {
    try {
      const response = await fetch(`${config.apiUrl}/api/public/chatbot/${config.chatbotId}/config`);

      if (response.ok) {
        const chatbot = await response.json();
        selectedChatbot = chatbot;

        // Update config with chatbot details
        config.primaryColor = chatbot.color_hex || config.primaryColor;
        config.botName = chatbot.name || config.botName;
        config.greeting = chatbot.greeting_message || config.greeting;
        config.avatarUrl = chatbot.avatar_url || null;

        // Update UI with new config
        updateWidgetAppearance();
      }
    } catch {
      // Silently fail and use default config
    }
  }

  // Load CTA buttons for public widget based on chatbot integrations
  async function loadCTAButtons() {
    try {
      if (!config.chatbotId) return;
      const params = new URLSearchParams();
      params.append('language', config.language || 'en');
      const response = await fetch(
        `${config.apiUrl}/api/public/chatbot/${encodeURIComponent(config.chatbotId)}/cta-buttons?${params.toString()}`
      );
      if (!response.ok) {
        ctaButtons = [];
        renderCTAButtons();
        return;
      }
      const data = await response.json();
      ctaButtons = Array.isArray(data.buttons) ? data.buttons : [];
      renderCTAButtons();
    } catch {
      ctaButtons = [];
      renderCTAButtons();
    }
  }

  function renderCTAButtons() {
    const container = document.getElementById('zaakiy-cta-buttons');
    if (!container) return;

    container.innerHTML = '';
    if (!ctaButtons.length) {
      container.style.display = 'none';
      return;
    }

    // Lucide Icons (SVG)
    const icons = {
      calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
      clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`,
      default: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`
    };

    container.style.display = 'flex';
    ctaButtons.forEach((button) => {
      const buttonEl = document.createElement('button');
      buttonEl.type = 'button';
      buttonEl.className = 'zaakiy-cta-button';

      // Determine Icon and Label
      let icon = icons.default;
      let label = button.label || button.id || 'Action';

      // Sanitize label (remove emojis if present) and select icon
      if (button.id === 'book_appointment' || label.toLowerCase().includes('book')) {
        icon = icons.calendar;
        label = label.replace(/📅|🗓️/g, '').trim();
      } else if (button.id === 'enquiry' || label.toLowerCase().includes('enquiry')) {
        icon = icons.clipboard;
        label = label.replace(/📋|📝/g, '').trim();
      }

      // Structure with Icon
      buttonEl.innerHTML = `<span style="display:flex; align-items:center; gap:6px;">${icon} <span>${label}</span></span>`;

      // Explicit Output Styling (Force Brand Color)
      // We use inline styles to guarantee priority over any generic CSS
      buttonEl.style.setProperty('background', config.primaryColor, 'important');
      buttonEl.style.setProperty('border-color', config.primaryColor, 'important');
      buttonEl.style.color = '#ffffff';

      // Hover effect simulation for inline styles
      buttonEl.onmouseenter = () => {
        buttonEl.style.opacity = '0.9';
      };
      buttonEl.onmouseleave = () => {
        buttonEl.style.opacity = '1';
      };

      buttonEl.addEventListener('click', () => {
        const inputField = document.getElementById('zaakiy-input');
        if (inputField && inputField.disabled) return;
        window.zaakiySendMessage(button.message || button.label || '');
      });
      container.appendChild(buttonEl);
    });
  }

  // Helper function to update input focus color dynamically
  function updateInputFocusColor() {
    // Remove existing dynamic style if present
    const existingStyle = document.getElementById('zaakiy-dynamic-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create new style element with updated primary color
    const styleElement = document.createElement('style');
    styleElement.id = 'zaakiy-dynamic-styles';
    styleElement.textContent = `
      .zaakiy-input-field:focus {
        border-color: ${config.primaryColor} !important;
      }
    `;
    document.head.appendChild(styleElement);
  }

  // Update widget appearance
  function updateWidgetAppearance() {
    const button = document.querySelector('.zaakiy-chat-button');
    const widgetRoot = document.getElementById('zaakiy-chat-widget');
    const header = document.querySelector('.zaakiy-chat-header');
    const sendButton = document.querySelector('.zaakiy-send-button');
    const closeButton = document.querySelector('.zaakiy-close-button');
    const botNameElement = document.querySelector('#zaakiy-bot-name');
    const greetingMessage = document.querySelector('#zaakiy-greeting');
    const avatarContainer = document.querySelector('#zaakiy-avatar-container');

    // Update colors with primary color
    if (widgetRoot) widgetRoot.style.setProperty('--zaakiy-primary-color', config.primaryColor);
    if (button) button.style.background = config.primaryColor;
    if (header) header.style.setProperty('background', config.primaryColor, 'important');
    if (sendButton) sendButton.style.background = config.primaryColor;
    if (closeButton) closeButton.style.color = config.primaryColor;
    const welcomeClose = document.querySelector('.zaakiy-welcome-close');
    if (welcomeClose) {
      welcomeClose.style.background = config.primaryColor;
      welcomeClose.style.color = '#ffffff';
    }

    // Update existing user messages
    const userMessages = document.querySelectorAll('.zaakiy-message.user .zaakiy-message-content');
    userMessages.forEach(msg => {
      msg.style.background = config.primaryColor;
    });

    // Update input field focus color by injecting a style rule
    updateInputFocusColor();

    // Update text content
    if (botNameElement) botNameElement.textContent = config.botName;
    if (greetingMessage) greetingMessage.innerHTML = parseMarkdown(config.greeting);
    const welcomeTextEl = document.querySelector('#zaakiy-welcome-text');
    if (welcomeTextEl) welcomeTextEl.innerHTML = parseMarkdown(config.welcomeMessage || config.greeting);

    if (avatarContainer) {
      while (avatarContainer.firstChild) avatarContainer.removeChild(avatarContainer.firstChild);
      const avatarElement = createAvatarImage(config.avatarUrl, config.botName, true);
      avatarContainer.appendChild(avatarElement);
    }
  }

  // Global functions
  window.zaakiyToggleChat = function () {
    const chatWindow = document.getElementById('zaakiy-chat-window');
    if (chatWindow) {
      const isOpen = chatWindow.style.display === 'flex';
      if (isOpen) {
        window.zaakiyCloseChat();
      } else {
        window.zaakiyOpenChat();
      }
    }
  };

  window.zaakiyOpenChat = function () {
    const chatWindow = document.getElementById('zaakiy-chat-window');
    const widgetContainer = document.getElementById('zaakiy-chat-widget');
    const chatButton = document.querySelector('.zaakiy-chat-button');
    if (chatWindow) {
      chatWindow.classList.remove('zaakiy-closing');
      chatWindow.style.display = 'flex';

      // Mobile-specific fixes: Ensure header is visible
      if (window.innerWidth <= 768) {
        // Add mobile class for additional styling
        chatWindow.classList.add('zaakiy-mobile-open');

        // Hide chat button when chat window is open on mobile
        if (chatButton) {
          chatButton.style.opacity = '0';
          chatButton.style.visibility = 'hidden';
          chatButton.style.pointerEvents = 'none';
          chatButton.style.transform = 'scale(0.8)';
        }

        // Ensure widget container accounts for mobile browser UI
        if (widgetContainer) {
          // Use dynamic viewport height which accounts for browser UI changes
          const dvh = window.innerHeight || document.documentElement.clientHeight;
          widgetContainer.style.height = dvh + 'px';
          widgetContainer.style.maxHeight = dvh + 'px';
        }

        // Ensure chat window is positioned correctly to show header
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          // Scroll messages container to top to ensure header is visible
          const messagesContainer = document.querySelector('.zaakiy-chat-messages');
          if (messagesContainer) {
            messagesContainer.scrollTop = 0;
          }
        }, 50);
      }

      // Trigger animation after display is set
      requestAnimationFrame(() => {
        chatWindow.classList.add('zaakiy-opening');
      });
      // Hide welcome overlay when chat opens
      const welcomeEl = document.getElementById('zaakiy-welcome-overlay');
      if (welcomeEl) welcomeEl.style.display = 'none';

      // Focus input field for better UX
      setTimeout(() => {
        const input = document.getElementById('zaakiy-input');
        if (input) input.focus();
      }, 300);
    }
  };

  window.zaakiyCloseChat = function () {
    const chatWindow = document.getElementById('zaakiy-chat-window');
    const widgetContainer = document.getElementById('zaakiy-chat-widget');
    const chatButton = document.querySelector('.zaakiy-chat-button');
    if (chatWindow) {
      chatWindow.classList.remove('zaakiy-opening');
      chatWindow.classList.remove('zaakiy-mobile-open'); // Remove mobile class
      chatWindow.classList.add('zaakiy-closing');

      // Show chat button when chat window is closed on mobile
      if (window.innerWidth <= 768 && chatButton) {
        // Show button after a short delay for smooth transition
        setTimeout(() => {
          chatButton.style.opacity = '1';
          chatButton.style.visibility = 'visible';
          chatButton.style.pointerEvents = 'auto';
          chatButton.style.transform = 'scale(1)';
        }, 200); // Match the closing animation duration
      }

      // Reset widget container height on mobile when closing
      if (window.innerWidth <= 768 && widgetContainer) {
        widgetContainer.style.height = '';
        widgetContainer.style.maxHeight = '';
      }

      // Hide after animation completes
      setTimeout(() => {
        chatWindow.style.display = 'none';
        chatWindow.classList.remove('zaakiy-closing');
      }, 200);
    }
  };

  // Close welcome overlay
  window.zaakiyCloseWelcome = function (event) {
    // Prevent event bubbling and default behavior
    if (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }

    const welcomeEl = document.getElementById('zaakiy-welcome-overlay');
    if (welcomeEl && welcomeEl.style.display !== 'none') {
      // Add fade-out animation
      welcomeEl.style.opacity = '0';
      welcomeEl.style.transition = 'opacity 0.2s ease';

      // Hide after animation
      setTimeout(() => {
        welcomeEl.style.display = 'none';
        welcomeEl.style.opacity = '1'; // Reset for next time
        welcomeEl.style.transition = '';
      }, 200);

      // Log for debugging (can be removed in production)
      console.log('Welcome overlay closed');
    }

    // Also ensure the button click is registered
    return false;
  };

  window.zaakiySendMessage = async function (messageOverride) {
    const input = document.getElementById('zaakiy-input');
    const sendButton = document.querySelector('.zaakiy-send-button');

    // Don't send if input is disabled (bot is typing)
    if (input?.disabled || sendButton?.disabled) return;

    const message = (messageOverride || input?.value || '').trim();

    if (!message) return;

    // Validate chatbot ID
    if (!config.chatbotId) {
      zaakiyAddMessage('Configuration error: No chatbot ID set.', 'bot');
      return;
    }

    // Add user message
    zaakiyAddMessage(message, 'user', true); // Save to storage
    if (!messageOverride && input) {
      input.value = '';
    }

    // Show typing indicator
    zaakiyShowTyping();

    const requestBody = {
      message: message,
      chatbot_id: selectedChatbot?.id || config.chatbotId,
      session_id: conversationId || null
    };

    try {
      // Use streaming endpoint
      const response = await fetch(`${config.apiUrl}/api/public/chat/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // Hide typing indicator immediately when response starts
      zaakiyHideTyping();

      // Create empty bot message to fill
      const { contentDiv, contentWrapper } = zaakiyAddMessage('', 'bot', false);
      let fullResponseText = '';
      let buttons = [];

      // Setup stream reader
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        const lines = buffer.split('\n\n');
        buffer = lines.pop() || ''; // Keep the last incomplete line in buffer

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6);
            if (!jsonStr) continue;

            try {
              const data = JSON.parse(jsonStr);

              if (data.type === 'token' && data.content) {
                fullResponseText += data.content;
                contentDiv.innerHTML = parseMarkdown(fullResponseText);
                // Auto-scroll
                const messagesContainer = document.getElementById('zaakiy-messages');
                if (messagesContainer) {
                  messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }
              }
              else if (data.type === 'complete') {
                if (data.content && data.content.length > fullResponseText.length) {
                  fullResponseText = data.content;
                  contentDiv.innerHTML = parseMarkdown(fullResponseText);
                }
                if (data.buttons) {
                  buttons = data.buttons;
                  const buttonsEl = createMessageButtons(buttons);
                  if (buttonsEl) contentWrapper.appendChild(buttonsEl);
                }
              }
              else if (data.type === 'error') {
                contentDiv.innerHTML += `<br><em>Error: ${data.error}</em>`;
              }

              if (data.session_id && !conversationId) {
                conversationId = data.session_id;
                localStorage.setItem(CONVERSATION_ID_KEY, conversationId);
              }

            } catch (e) {
              console.error('Error parsing stream data', e);
            }
          }
        }
      }

      // Save final state
      // We need to update the internal storage manually since we bypassed zaakiyAddMessage's auto-save
      // Or just call saveCurrentMessages()
      saveCurrentMessages();

    } catch (error) {
      zaakiyHideTyping();
      zaakiyAddMessage('Sorry, I encountered an error. Please try again.', 'bot', true);
      console.error('Chat error:', error);
    }
  };

  // Add global function to clear chat history
  window.zaakiyClearChat = function () {
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (messagesContainer) {
      messagesContainer.innerHTML = '';

      // Add greeting message back with markdown parsing
      const greetingDiv = document.createElement('div');
      greetingDiv.className = 'zaakiy-message bot';
      greetingDiv.innerHTML = `<div class="zaakiy-message-content" id="zaakiy-greeting">${parseMarkdown(config.greeting)}</div>`;
      messagesContainer.appendChild(greetingDiv);

      // Clear session
      conversationId = null;
      clearSavedSession();
    }
  };

  // Format timestamp for display
  function formatTimestamp(date) {
    const now = new Date();
    const diff = now - date;

    // Less than 1 minute ago
    if (diff < 60000) {
      return 'Just now';
    }

    // Less than 1 hour ago
    if (diff < 3600000) {
      const minutes = Math.floor(diff / 60000);
      return `${minutes}m ago`;
    }

    // Today
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }

    // Yesterday
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    }

    // Older than yesterday - show date and time
    const daysDiff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (daysDiff < 7) {
      return `${daysDiff}d ago`;
    }

    // Return formatted date and time for older messages
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' ' +
      date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  }

  // Enhanced markdown parser with link highlighting
  function parseMarkdown(text) {
    if (!text) return '';

    // Store links temporarily to protect them from escaping
    const linkPlaceholders = [];
    let linkIndex = 0;

    // Extract and store links with a placeholder
    let processedText = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      const placeholder = `___LINK_${linkIndex}___`;
      linkPlaceholders.push({ linkText, url });
      linkIndex++;
      return placeholder;
    });

    // Escape HTML to prevent XSS (after extracting links)
    processedText = processedText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Parse bold **text** (must be before italic to handle ** correctly)
    processedText = processedText.replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight: 700; color: #1a1a1a;">$1</strong>');

    // Parse italic *text* (single asterisks, but not part of **)
    processedText = processedText.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em style="font-style: italic; opacity: 0.95;">$1</em>');

    // Parse bullet points (- item)
    processedText = processedText.replace(/^- (.+)$/gm, '<div style="margin-left: 12px; margin-bottom: 2px; margin-top: 1px;">• $1</div>');

    // Restore links with proper HTML and parse any markdown within link text
    linkPlaceholders.forEach((link, index) => {
      const placeholder = `___LINK_${index}___`;

      // Parse bold/italic within link text
      let formattedLinkText = link.linkText
        .replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight: 700;">$1</strong>')
        .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em style="font-style: italic;">$1</em>');

      const linkHtml = `<a href="${link.url}" target="_blank" rel="noopener noreferrer" style="color: ${config.primaryColor}; font-weight: 600; border-bottom: 1px solid ${config.primaryColor}; text-decoration: none; transition: all 0.2s;">${formattedLinkText}</a>`;
      processedText = processedText.replace(placeholder, linkHtml);
    });

    // Parse line breaks - reduce excessive whitespace
    // Convert double line breaks to paragraph breaks, single to just a break
    processedText = processedText.replace(/\n\n+/g, '<br><br>'); // Multiple newlines -> double break
    processedText = processedText.replace(/\n/g, '<br>'); // Single newlines -> single break

    return processedText;
  }

  function createMessageButtons(buttons) {
    if (!buttons || !buttons.length) return null;

    const container = document.createElement('div');
    container.className = 'zaakiy-message-buttons';

    buttons.forEach((button) => {
      const buttonEl = document.createElement('button');
      buttonEl.type = 'button';
      buttonEl.className = 'zaakiy-message-button';
      const label = button.text || button.label || button.value || 'Select';
      const value = button.value || button.text || button.label || '';
      buttonEl.textContent = label;
      if (value) {
        buttonEl.setAttribute('data-value', value);
      }
      container.appendChild(buttonEl);
    });

    return container;
  }

  function zaakiyAddMessage(content, type, saveToStorage = true, isHtml = false, timestamp = null, buttons = []) {
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (!messagesContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `zaakiy-message ${type}`;

    // Store timestamp or use current time
    const messageTimestamp = timestamp || new Date();
    messageDiv.dataset.timestamp = messageTimestamp.getTime();

    if (type === 'bot') {
      const avatarElement = createAvatarImage(config.avatarUrl, config.botName, false);
      messageDiv.appendChild(avatarElement);
    }

    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'zaakiy-message-content-wrapper';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'zaakiy-message-content';

    // For bot messages: use pre-formatted HTML if available, otherwise parse markdown
    // For user messages: always use plain text
    if (type === 'bot') {
      if (isHtml) {
        // Already formatted HTML from localStorage
        contentDiv.innerHTML = content;
      } else {
        // Fresh message from API - parse markdown
        contentDiv.innerHTML = parseMarkdown(content);
      }
    } else {
      contentDiv.textContent = content;
      contentDiv.style.background = config.primaryColor;
    }

    // Add timestamp
    const timestampDisplay = formatTimestamp(messageTimestamp);
    const timestampDiv = document.createElement('div');
    timestampDiv.className = 'zaakiy-message-timestamp';
    timestampDiv.textContent = timestampDisplay;

    contentWrapper.appendChild(contentDiv);
    if (type === 'bot' && buttons && buttons.length) {
      const buttonsEl = createMessageButtons(buttons);
      if (buttonsEl) contentWrapper.appendChild(buttonsEl);
    }
    contentWrapper.appendChild(timestampDiv);
    messageDiv.appendChild(contentWrapper);

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Save to localStorage if requested
    if (saveToStorage) {
      saveCurrentMessages();
    }

    return { messageDiv, contentDiv, contentWrapper };
  }

  // Helper function to get all current messages
  function getCurrentMessages() {
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (!messagesContainer) return [];

    const messageElements = messagesContainer.querySelectorAll('.zaakiy-message:not(#zaakiy-typing)');
    const messages = [];

    messageElements.forEach(msgEl => {
      const type = msgEl.classList.contains('user') ? 'user' : 'bot';
      const timestamp = msgEl.dataset.timestamp ? new Date(parseInt(msgEl.dataset.timestamp)) : new Date();

      // Look for content inside the wrapper
      const contentWrapper = msgEl.querySelector('.zaakiy-message-content-wrapper');
      const contentEl = contentWrapper ? contentWrapper.querySelector('.zaakiy-message-content') : msgEl.querySelector('.zaakiy-message-content');

      if (contentEl) {
        // For bot messages, save the HTML to preserve formatting
        // For user messages, save plain text
        const content = type === 'bot' ? contentEl.innerHTML : contentEl.textContent;
        let buttons = [];
        if (type === 'bot') {
          const buttonEls = msgEl.querySelectorAll('.zaakiy-message-button');
          buttonEls.forEach((buttonEl) => {
            const text = buttonEl.textContent || '';
            const value = buttonEl.getAttribute('data-value') || text;
            buttons.push({ text, value });
          });
        }
        messages.push({ content, type, isHtml: type === 'bot', timestamp, buttons });
      }
    });

    return messages;
  }

  // Save current messages to storage
  function saveCurrentMessages() {
    const messages = getCurrentMessages();
    saveSession(messages);
  }

  // Timer for showing elapsed time
  let typingTimer = null;
  let typingStartTime = null;

  function zaakiyShowTyping() {
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (!messagesContainer) return;

    // Record start time
    typingStartTime = Date.now();

    // Disable input and send button while bot is typing
    const inputField = document.getElementById('zaakiy-input');
    const sendButton = document.querySelector('.zaakiy-send-button');
    if (inputField) {
      inputField.disabled = true;
      inputField.placeholder = 'Bot is typing...';
    }
    if (sendButton) {
      sendButton.disabled = true;
      sendButton.style.opacity = '0.5';
      sendButton.style.cursor = 'not-allowed';
    }

    // Start timer to update elapsed time
    let elapsedSeconds = 0;
    typingTimer = setInterval(() => {
      elapsedSeconds++;
      if (inputField && elapsedSeconds > 3) {
        inputField.placeholder = `Bot is typing... (${elapsedSeconds}s)`;
      }

      // Show warning if taking too long
      if (elapsedSeconds > 15) {
        inputField.placeholder = `Still processing... (${elapsedSeconds}s)`;
      }
    }, 1000);

    const typingDiv = document.createElement('div');
    typingDiv.className = 'zaakiy-message bot';
    typingDiv.id = 'zaakiy-typing';

    const avatarElement = createAvatarImage(config.avatarUrl, config.botName, false);
    typingDiv.appendChild(avatarElement);

    const typingInner = document.createElement('div');
    typingInner.className = 'zaakiy-typing';
    typingInner.innerHTML = '<div class="zaakiy-typing-dot"></div><div class="zaakiy-typing-dot"></div><div class="zaakiy-typing-dot"></div>';
    typingDiv.appendChild(typingInner);
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function zaakiyHideTyping() {
    const typingElement = document.getElementById('zaakiy-typing');
    if (typingElement) typingElement.remove();

    // Clear the timer
    if (typingTimer) {
      clearInterval(typingTimer);
      typingTimer = null;
    }

    // Clear response time tracking
    if (typingStartTime) {
      typingStartTime = null;
    }

    // Re-enable input and send button
    const inputField = document.getElementById('zaakiy-input');
    const sendButton = document.querySelector('.zaakiy-send-button');
    if (inputField) {
      inputField.disabled = false;
      inputField.placeholder = 'Type your message...';
      inputField.focus(); // Auto-focus for better UX
    }
    if (sendButton) {
      sendButton.disabled = false;
      sendButton.style.opacity = '1';
      sendButton.style.cursor = 'pointer';
    }
  }

  // Initialize widget
  function initWidget() {
    if (!document.body) {
      setTimeout(initWidget, 100);
      return;
    }

    createWidget();
    loadChatbotConfig();
    loadCTAButtons();
  }

  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
