// ZaaKy AI Chatbot Widget v3.0 - Production Ready
// Works with dynamic script loading, Next.js, React, and all modern frameworks
(function() {
  'use strict';
  
  console.log('🤖 ZaaKy Widget Loading...');
  
  // Robust script tag detection - works with dynamic loading
  function getScriptTag() {
    // Try document.currentScript first
    if (document.currentScript) {
      console.log('✅ Found script via document.currentScript');
      return document.currentScript;
    }
    
    // Fallback: find the script tag by src
    const scripts = document.querySelectorAll('script[src*="chat-widget.js"]');
    if (scripts.length > 0) {
      console.log('✅ Found script via querySelector');
      return scripts[scripts.length - 1]; // Get the most recently added one
    }
    
    console.warn('⚠️ Could not find script tag');
    return null;
  }
  
  const scriptTag = getScriptTag();
  
  // Configuration with fallbacks
  const config = {
    apiUrl: scriptTag?.getAttribute('data-api-url') || 'https://zaakiy-production.up.railway.app',
    position: scriptTag?.getAttribute('data-position') || 'bottom-right',
    chatbotId: scriptTag?.getAttribute('data-chatbot-id') || null,
    primaryColor: scriptTag?.getAttribute('data-primary-color') || '#3B82F6',
    botName: scriptTag?.getAttribute('data-bot-name') || 'Assistant',
    greeting: scriptTag?.getAttribute('data-greeting') || 'Hi! How can I help you today?',
    avatarUrl: scriptTag?.getAttribute('data-avatar-url') || null
  };
  
  console.log('📋 Widget Config:', {
    apiUrl: config.apiUrl,
    chatbotId: config.chatbotId,
    botName: config.botName,
    hasAvatar: !!config.avatarUrl
  });
  
  // Validate required config
  if (!config.chatbotId) {
    console.error('❌ ERROR: data-chatbot-id is required! Please set it on the script tag.');
    return;
  }
  
  // State
  let selectedChatbot = null;
  let conversationId = null;
  let isWidgetCreated = false;
  
  // Convert legacy Supabase URLs to proxy URLs and ensure full URLs
  function convertLegacyUrl(url) {
    if (!url) return null;
    
    // Handle legacy Supabase storage URLs
    if (url.includes('storage/v1/object/uploads/')) {
      const pathParts = url.split('storage/v1/object/uploads/');
      if (pathParts.length > 1) {
        const filePath = pathParts[1];
        return `${config.apiUrl}/api/uploads/avatar/legacy/${filePath}`;
      }
    }
    
    // If URL is already absolute (starts with http:// or https://), return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // If URL is relative (starts with /), prepend the API base URL
    if (url.startsWith('/')) {
      return `${config.apiUrl}${url}`;
    }
    
    // Otherwise, assume it's a relative path and prepend the API URL
    return `${config.apiUrl}/${url}`;
  }
  
  // Create widget HTML
  function createWidget() {
    if (isWidgetCreated) {
      console.warn('⚠️ Widget already created');
      return;
    }
    
    console.log('🎨 Creating widget...');
    
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'zaakiy-chat-widget';
    widgetContainer.innerHTML = `
      <style>
        #zaakiy-chat-widget {
          position: fixed;
          ${config.position.includes('right') ? 'right: 25px;' : 'left: 25px;'}
          bottom: 25px;
          z-index: 999999;
          font-family: "Poppins", sans-serif;
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
          width: 450px;
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
            right: 10px !important;
            left: 10px !important;
            bottom: 10px;
            align-items: stretch;
          }
          
          .zaakiy-chat-window {
            width: 100%;
            max-width: 100%;
            height: calc(100vh - 100px);
            max-height: calc(100vh - 100px);
            margin-bottom: 10px;
            border-radius: 12px;
          }
          
          .zaakiy-chat-button {
            align-self: ${config.position.includes('right') ? 'flex-end' : 'flex-start'};
          }
        }
        
        @media (max-width: 480px) {
          .zaakiy-chat-window {
            border-radius: 8px;
          }
          
          .zaakiy-chat-button {
            width: 56px;
            height: 56px;
          }
        }
        
        .zaakiy-chat-header {
          background: ${config.primaryColor};
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
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
            gap: 6px;
            min-width: 0;
          }
        
        .zaakiy-bot-name-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }
        
        @media (max-width: 480px) {
          .zaakiy-chat-header {
            padding: 14px;
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
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .zaakiy-avatar-placeholder {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .zaakiy-chat-messages {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          overflow-x: hidden;
          background: #f8f9fa;
          scroll-behavior: smooth;
        }
        
        /* Scrollbar styling */
        .zaakiy-chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        
        .zaakiy-chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .zaakiy-chat-messages::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        .zaakiy-chat-messages::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        @media (max-width: 480px) {
          .zaakiy-chat-messages {
            padding: 12px;
          }
        }
        
        .zaakiy-message {
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        
        .zaakiy-message.user {
          flex-direction: row-reverse;
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
        
        .zaakiy-message-content {
          max-width: 80%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 16px;
          line-height: 1.5;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .zaakiy-message.bot .zaakiy-message-content {
          background: white;
          border: 1px solid #e1e5e9;
        }
        
        .zaakiy-message.user .zaakiy-message-content {
          background: ${config.primaryColor};
          color: white;
        }
        
        .zaakiy-chat-input {
          padding: 15px;
          border-top: 1px solid #e1e5e9;
          display: flex;
          gap: 10px;
          background: white;
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
            max-width: 85%;
            font-size: 16px;
            padding: 8px 12px;
          }
          
          .zaakiy-chat-input {
            padding: 12px;
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
          background: rgb(255, 255, 255);
          border: none;
          color:${config.primaryColor};
          cursor: pointer;
          font-size: 16px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
          line-height: 1;
        }
        
        .zaakiy-close-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }
        
        .zaakiy-close-button:active {
          transform: scale(0.95);
        }
        
        @media (max-width: 480px) {
          .zaakiy-close-button {
            width: 36px;
            height: 36px;
            font-size: 30px;
          }
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
            color: #666;
            text-align: center;
            margin-top: 1px;
          }
          .zaakiy-powered-by:hover {
            color: #333;
          }
          .zaakiy-powered-by:active {
            color: #000;
          }
          .zaakiy-powered-by:focus {
            color: #000;
          }
          .zaakiy-powered-by:visited {
            color: #000;
          }
          .zaakiy-powered-by:link {
            color: #000;
          }
          .zaakiy-powered-by:active {
            color: #000;
          }
          .zaakiy-powered-by:focus {
            color: #000;
          }
          .zaakiy-powered-by:visited {
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
          <button class="zaakiy-close-button" onclick="window.zaakiyCloseChat()">×</button>
        </div>
        
        <div class="zaakiy-chat-messages" id="zaakiy-messages">
          <div class="zaakiy-message bot">
            <div class="zaakiy-message-content" id="zaakiy-greeting"></div>
          </div>
        </div>
        
        <div class="zaakiy-chat-input">
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
        <p class="zaakiy-powered-by">Powered by Zaakiy</p>
      </div>
      
      
      <button class="zaakiy-chat-button" onclick="window.zaakiyToggleChat()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>
    `;
    
    document.body.appendChild(widgetContainer);
    isWidgetCreated = true;
    
    // Set initial greeting
    const greetingEl = document.getElementById('zaakiy-greeting');
    if (greetingEl) greetingEl.textContent = config.greeting;
    
    console.log('✅ Widget created successfully');
  }
  
  // Load chatbot configuration
  async function loadChatbotConfig() {
    try {
      console.log('📡 Loading chatbot config from API...');
      
      const response = await fetch(`${config.apiUrl}/api/public/chatbot/${config.chatbotId}/config`);
      
      if (response.ok) {
        const chatbot = await response.json();
        selectedChatbot = chatbot;
        
        console.log('✅ Chatbot config loaded:', chatbot.name);
        
        // Update config with chatbot details
        config.primaryColor = chatbot.color_hex || config.primaryColor;
        config.botName = chatbot.name || config.botName;
        config.greeting = chatbot.greeting_message || config.greeting;
        config.avatarUrl = chatbot.avatar_url || null;
        
        // Update UI with new config
        updateWidgetAppearance();
      } else {
        console.error('❌ Failed to load chatbot config:', response.status);
      }
    } catch (error) {
      console.warn('⚠️ Failed to load chatbot config:', error);
    }
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
    const header = document.querySelector('.zaakiy-chat-header');
    const sendButton = document.querySelector('.zaakiy-send-button');
    const closeButton = document.querySelector('.zaakiy-close-button');
    const botNameElement = document.querySelector('#zaakiy-bot-name');
    const greetingMessage = document.querySelector('#zaakiy-greeting');
    const avatarContainer = document.querySelector('#zaakiy-avatar-container');
    
    // Update colors with primary color
    if (button) button.style.background = config.primaryColor;
    if (header) header.style.background = config.primaryColor;
    if (sendButton) sendButton.style.background = config.primaryColor;
    if (closeButton) closeButton.style.color = config.primaryColor;
    
    // Update existing user messages
    const userMessages = document.querySelectorAll('.zaakiy-message.user .zaakiy-message-content');
    userMessages.forEach(msg => {
      msg.style.background = config.primaryColor;
    });
    
    // Update input field focus color by injecting a style rule
    updateInputFocusColor();
    
    // Update text content
    if (botNameElement) botNameElement.textContent = config.botName;
    if (greetingMessage) greetingMessage.textContent = config.greeting;
    
    if (avatarContainer) {
      while (avatarContainer.firstChild) avatarContainer.removeChild(avatarContainer.firstChild);
      if (config.avatarUrl) {
        const convertedUrl = convertLegacyUrl(config.avatarUrl);
        const img = document.createElement('img');
        img.src = convertedUrl;
        img.alt = config.botName;
        img.className = 'zaakiy-avatar';
        avatarContainer.appendChild(img);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'zaakiy-avatar-placeholder';
        placeholder.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
          </svg>
        `;
        avatarContainer.appendChild(placeholder);
      }
    }
  }
  
  // Global functions
  window.zaakiyToggleChat = function() {
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
  
  window.zaakiyOpenChat = function() {
    const chatWindow = document.getElementById('zaakiy-chat-window');
    if (chatWindow) {
      chatWindow.classList.remove('zaakiy-closing');
      chatWindow.style.display = 'flex';
      // Trigger animation after display is set
      requestAnimationFrame(() => {
        chatWindow.classList.add('zaakiy-opening');
      });
      console.log('💬 Chat opened');
      
      // Focus input field for better UX
      setTimeout(() => {
        const input = document.getElementById('zaakiy-input');
        if (input) input.focus();
      }, 300);
    }
  };
  
  window.zaakiyCloseChat = function() {
    const chatWindow = document.getElementById('zaakiy-chat-window');
    if (chatWindow) {
      chatWindow.classList.remove('zaakiy-opening');
      chatWindow.classList.add('zaakiy-closing');
      
      // Hide after animation completes
      setTimeout(() => {
        chatWindow.style.display = 'none';
        chatWindow.classList.remove('zaakiy-closing');
      }, 200);
      
      console.log('💬 Chat closed');
    }
  };
  
  window.zaakiySendMessage = function() {
    const input = document.getElementById('zaakiy-input');
    const sendButton = document.querySelector('.zaakiy-send-button');
    
    // Don't send if input is disabled (bot is typing)
    if (input?.disabled || sendButton?.disabled) return;
    
    const message = input?.value.trim();
    
    if (!message) return;
    
    // Validate chatbot ID
    if (!config.chatbotId) {
      console.error('❌ No chatbot ID configured!');
      zaakiyAddMessage('Configuration error: No chatbot ID set.', 'bot');
      return;
    }
    
    console.log('📤 Sending message:', message);
    console.log('🤖 Using chatbot ID:', selectedChatbot?.id || config.chatbotId);
    
    // Add user message
    zaakiyAddMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    zaakiyShowTyping();
    
    // Send to API
    const requestBody = {
      message: message,
      chatbot_id: selectedChatbot?.id || config.chatbotId,
      session_id: conversationId || null
    };
    
    console.log('📡 Request body:', requestBody);
    
    fetch(`${config.apiUrl}/api/public/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
    .then(async response => {
      console.log('📡 Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Server error response:', errorText);
        
        let errorMessage = 'Sorry, I\'m having connection issues. Please try again.';
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.detail) {
            errorMessage = `Error: ${errorData.detail}`;
          }
        } catch {
          // Not JSON, use text
          if (errorText) {
            errorMessage = `Server error: ${errorText.substring(0, 100)}`;
          }
        }
        
        throw new Error(errorMessage);
      }
      return response.json();
    })
    .then(data => {
      zaakiyHideTyping();
      
      if (data.session_id && !conversationId) {
        conversationId = data.session_id;
        console.log('💾 Session ID saved:', conversationId);
      }
      
      console.log('📥 Received response:', data.response?.substring(0, 50) + '...');
      zaakiyAddMessage(data.response || 'Sorry, I had trouble processing that.', 'bot');
    })
    .catch((error) => {
      zaakiyHideTyping();
      console.error('❌ Chat API error:', error);
      zaakiyAddMessage(error.message || 'Sorry, I\'m having connection issues. Please try again.', 'bot');
    });
  };
  
  function zaakiyAddMessage(content, type) {
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `zaakiy-message ${type}`;
    
    let avatarHtml = '';
    if (type === 'bot') {
      if (config.avatarUrl) {
        const convertedUrl = convertLegacyUrl(config.avatarUrl);
        avatarHtml = `<img src="${convertedUrl}" alt="${config.botName}" class="zaakiy-message-avatar" />`;
      } else {
        avatarHtml = `
          <div class="zaakiy-message-avatar-placeholder">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#6b7280">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
            </svg>
          </div>
        `;
      }
    }
    
    if (avatarHtml) {
      const avatarWrapper = document.createElement('div');
      avatarWrapper.innerHTML = avatarHtml;
      messageDiv.appendChild(avatarWrapper.firstChild);
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'zaakiy-message-content';
    contentDiv.textContent = content;
    
    // Apply primary color to user messages
    if (type === 'user') {
      contentDiv.style.background = config.primaryColor;
    }
    
    messageDiv.appendChild(contentDiv);
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  function zaakiyShowTyping() {
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (!messagesContainer) return;
    
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
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'zaakiy-message bot';
    typingDiv.id = 'zaakiy-typing';
    
    let avatarHtml = '';
    if (config.avatarUrl) {
      const convertedUrl = convertLegacyUrl(config.avatarUrl);
      avatarHtml = `<img src="${convertedUrl}" alt="${config.botName}" class="zaakiy-message-avatar" />`;
    } else {
      avatarHtml = `
        <div class="zaakiy-message-avatar-placeholder">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#6b7280">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
          </svg>
        </div>
      `;
    }
    
    if (avatarHtml) {
      const avatarWrapper = document.createElement('div');
      avatarWrapper.innerHTML = avatarHtml;
      typingDiv.appendChild(avatarWrapper.firstChild);
    }
    
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
    console.log('🚀 Initializing ZaaKy Widget...');
    
    if (!document.body) {
      console.log('⏳ Waiting for document.body...');
      setTimeout(initWidget, 100);
      return;
    }
    
    createWidget();
    loadChatbotConfig();
    
    console.log('✅ ZaaKy Widget initialized successfully!');
  }
  
  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
