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
  
  // Convert legacy Supabase URLs to proxy URLs
  function convertLegacyUrl(url) {
    if (!url) return null;
    
    if (url.includes('storage/v1/object/uploads/')) {
      const pathParts = url.split('storage/v1/object/uploads/');
      if (pathParts.length > 1) {
        const filePath = pathParts[1];
        const baseUrl = config.apiUrl.replace('3000', '8001');
        return `${baseUrl}/api/uploads/avatar/legacy/${filePath}`;
      }
    }
    return url;
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
          ${config.position.includes('right') ? 'right: 20px;' : 'left: 20px;'}
          bottom: 20px;
          z-index: 999999;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
        }
        
        .zaakiy-chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        
        .zaakiy-chat-window {
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          display: none;
          flex-direction: column;
          overflow: hidden;
          margin-bottom: 10px;
        }
        
        .zaakiy-chat-header {
          background: ${config.primaryColor};
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .zaakiy-chat-header-info {
          display: flex;
          align-items: center;
          gap: 10px;
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
          background: #f8f9fa;
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
          padding: 10px 12px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.4;
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
        }
        
        .zaakiy-input-field {
          flex: 1;
          padding: 10px 12px;
          border: 1px solid #e1e5e9;
          border-radius: 20px;
          outline: none;
          font-size: 14px;
        }
        
        .zaakiy-send-button {
          background: ${config.primaryColor};
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .zaakiy-close-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 18px;
          padding: 5px;
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
            <div>
              <div style="width: 8px; height: 8px; background: #4ade80; border-radius: 50%; margin-bottom: 2px;"></div>
              <span id="zaakiy-bot-name">${config.botName}</span>
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
      </div>
      
      <button class="zaakiy-chat-button" onclick="window.zaakiyOpenChat()">
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
  
  // Update widget appearance
  function updateWidgetAppearance() {
    const button = document.querySelector('.zaakiy-chat-button');
    const header = document.querySelector('.zaakiy-chat-header');
    const botNameElement = document.querySelector('#zaakiy-bot-name');
    const greetingMessage = document.querySelector('#zaakiy-greeting');
    const avatarContainer = document.querySelector('#zaakiy-avatar-container');
    
    if (button) button.style.background = config.primaryColor;
    if (header) header.style.background = config.primaryColor;
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
  window.zaakiyOpenChat = function() {
    const chatWindow = document.getElementById('zaakiy-chat-window');
    if (chatWindow) {
      chatWindow.style.display = 'flex';
      console.log('💬 Chat opened');
    }
  };
  
  window.zaakiyCloseChat = function() {
    const chatWindow = document.getElementById('zaakiy-chat-window');
    if (chatWindow) {
      chatWindow.style.display = 'none';
      console.log('💬 Chat closed');
    }
  };
  
  window.zaakiySendMessage = function() {
    const input = document.getElementById('zaakiy-input');
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
        } catch (e) {
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
    messageDiv.appendChild(contentDiv);
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  function zaakiyShowTyping() {
    const messagesContainer = document.getElementById('zaakiy-messages');
    if (!messagesContainer) return;
    
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
