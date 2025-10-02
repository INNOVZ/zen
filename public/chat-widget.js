(function() {
  // Get configuration from script attributes
  const currentScript = document.currentScript || document.querySelector('script[data-chatbot-id]');
  const apiUrl = currentScript?.getAttribute('data-api-url') || 'http://localhost:8001';
  const chatbotId = currentScript?.getAttribute('data-chatbot-id') || null;
  
  // Configuration
  const config = {
    apiUrl: apiUrl,
    position: 'bottom-right', // 'bottom-right' or 'bottom-left'
    chatbotId: chatbotId, // Specific chatbot ID from embed
    orgId: null, // Organization ID (optional)
    // These will be loaded from the API
    primaryColor: '#3B82F6',
    botName: 'Assistant',
    greeting: 'Hi! How can I help you today?'
  };

  // State
  let selectedChatbot = null;
  let conversationId = null;

  // Create widget HTML
  function createWidget() {
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'zentria-chat-widget';
    widgetContainer.innerHTML = `
      <style>
        #zentria-chat-widget {
          position: fixed;
          ${config.position.includes('right') ? 'right: 25px;' : 'left: 25px;'}
          bottom: 20px;
          z-index: 10000;
          font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .zentria-chat-button {
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
          z-index: 10001;
        }
        
        .zentria-chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        
        .zentria-chat-button:active {
          transform: scale(0.95);
        }

        .zentria-chat-button.has-notification {
          animation: zentria-bounce-glow 2s infinite;
        }

        .zentria-chat-button.has-notification::after {
          content: '💬';
          position: absolute;
          top: -8px;
          right: -8px;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          border-radius: 50%;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          animation: zentria-notification-bounce 1s infinite alternate;
        }

        @keyframes zentria-bounce-glow {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 0 rgba(102, 126, 234, 0.4); 
          }
          50% { 
            transform: scale(1.05); 
            box-shadow: 0 6px 20px rgba(0,0,0,0.2), 0 0 0 8px rgba(102, 126, 234, 0.2); 
          }
        }

        @keyframes zentria-notification-bounce {
          0% { transform: scale(1) rotate(-5deg); }
          100% { transform: scale(1.1) rotate(5deg); }
        }

        /* Unread Message Notification */
        .zentria-chat-button.has-unread {
          animation: zentria-unread-pulse 2s infinite;
        }

        .zentria-chat-button.has-unread::before {
          content: attr(data-unread-count);
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: bold;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
          z-index: 1;
          animation: zentria-unread-bounce 0.6s infinite alternate;
        }

        @keyframes zentria-unread-pulse {
          0%, 100% { 
            box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 0 rgba(239, 68, 68, 0.4); 
          }
          50% { 
            box-shadow: 0 6px 20px rgba(0,0,0,0.2), 0 0 0 8px rgba(239, 68, 68, 0.2); 
          }
        }

        @keyframes zentria-unread-bounce {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        .zentria-chat-window {
          width: 420px;
          height: 75vh;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          display: none;
          flex-direction: column;
          overflow: hidden;
          margin-bottom: 10px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          #zentria-chat-widget {
            ${config.position.includes('right') ? 'right: 15px;' : 'left: 15px;'}
            bottom: 15px;
          }
          
          .zentria-chat-button {
            width: 56px;
            height: 56px;
          }
          
          .zentria-chat-window {
            width: calc(100vw - 30px);
            max-width: 400px;
            height: calc(100vh - 50px);
            max-height: 90vh;
            margin-bottom: 15px;
            border-radius: 16px;
          }
          
          .zentria-chat-header {
            margin: 8px;
            padding: 12px;
            font-size: 16px;
            border-radius: 8px;
          }
          
          .zentria-chat-messages {
            padding: 12px;
          }
          
          .zentria-message-content {
            max-width: 85%;
            font-size: 15px;
            padding: 12px 14px;
          }
          
          .zentria-chat-input {
            padding: 12px;
            gap: 8px;
          }
          
          .zentria-input-field {
            padding: 12px 14px;
            font-size: 16px; /* Prevents zoom on iOS */
            border-radius: 12px;
          }
          
          .zentria-send-button {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }
          
          .zentria-chat-button:active {
            transform: scale(0.9);
          }
        }
        
        @media (max-width: 480px) {
          #zentria-chat-widget {
            ${config.position.includes('right') ? 'right: 10px;' : 'left: 10px;'}
            bottom: 10px;
          }
          
          .zentria-chat-button {
            width: 52px;
            height: 52px;
          }
          
          .zentria-chat-window {
            width: calc(100vw - 20px);
            height: calc(100vh - 80px);
            margin-bottom: 10px;
            border-radius: 12px;
          }
          
          .zentria-chat-header {
            margin: 6px;
            padding: 10px;
            font-size: 15px;
          }
          
          .zentria-chat-messages {
            padding: 10px;
          }
          
          .zentria-message-content {
            max-width: 90%;
            font-size: 14px;
            padding: 10px 12px;
          }
          
          .zentria-chat-input {
            padding: 10px;
            gap: 6px;
          }
          
          .zentria-input-field {
            padding: 10px 12px;
            font-size: 16px;
            border-radius: 10px;
          }
          
          .zentria-send-button {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          
          .zentria-chat-button:active {
            transform: scale(0.9);
          }
        }
        
        
        .zentria-chat-header {
          background: ${config.primaryColor};
          color: white;
          margin: 10px;
          border-radius: 12px;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 18px;
          font-weight: 800;
        }
        
        .zentria-chat-messages {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          background: #f8f9fa;
          transition: opacity 0.3s ease;
        }
        
        
        .zentria-message {
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        
        .zentria-message.user {
          flex-direction: row-reverse;
        }
        
        .zentria-message-content {
          max-width: 80%;
          padding: 10px 12px;
          font-size: 14px;
          line-height: 1.4;
        }
        
        .zentria-message.bot .zentria-message-content {
          border-radius: 0px 10px 10px 10px;
        }
        
        .zentria-message.user .zentria-message-content {
          border-radius: 10px 0px 10px 10px;
        }
        
        .zentria-message-timestamp {
          font-size: 11px;
          color: #999;
          margin-top: 4px;
          text-align: right;
        }
        
        .zentria-message.user .zentria-message-timestamp {
          text-align: left;
        }
        
        .zentria-message-content ul {
          margin: 8px 0;
          padding-left: 20px;
        }
        
        .zentria-message-content li {
          margin: 4px 0;
          list-style-type: disc;
        }
        
        .zentria-message-content ol {
          margin: 8px 0;
          padding-left: 20px;
        }
        
        .zentria-message-content ol li {
          list-style-type: decimal;
        }
        
        .zentria-message-content strong {
          font-weight: 600;
        }
        
        .zentria-message-content em {
          font-style: italic;
        }
        
        .zentria-message-content code {
          background: rgba(0,0,0,0.1);
          padding: 2px 4px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
        }
        
        .zentria-message-content pre {
          background: rgba(0,0,0,0.05);
          padding: 8px;
          border-radius: 6px;
          margin: 8px 0;
          overflow-x: auto;
        }
        
        .zentria-message-content pre code {
          background: none;
          padding: 0;
        }
        
        .zentria-message-content a {
          color: ${config.primaryColor};
          text-decoration: underline;
        }
        
        .zentria-message-content a:hover {
          text-decoration: none;
        }
        
        .zentria-message-content .price {
          font-weight: 600;
          color: #059669;
        }
        
        .zentria-message.bot .zentria-message-content {
          background: white;
          border: 1px solid #e1e5e9;
        }
        
        .zentria-message.user .zentria-message-content {
          background: ${config.primaryColor};
          color: white;
        }
        
        .zentria-chat-input {
          padding: 15px;
          border-top: 1px solid #e1e5e9;
          display: flex;
          gap: 10px;
          transition: opacity 0.3s ease;
        }
        
        
        .zentria-input-field {
          flex: 1;
          padding: 10px 12px;
          border: 1px solid #e1e5e9;
          border-radius: 10px;
          outline: none;
          font-size: 14px;
        }
        
        .zentria-send-button {
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
          border-radius: 10px;
          transition: all 0.2s ease;
        }
        
        .zentria-send-button:hover {
          background: ${config.primaryColor}dd;
          transform: scale(1.05);
        }
        
        .zentria-send-button:active {
          transform: scale(0.95);
        }
        
        .zentria-close-button {
          background: #fff;
          border: none;
          color: ${config.primaryColor};
          cursor: pointer;
          font-size: 20px;
          height: 24px;
          width: 24px;
          display: flex;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
        }
        
        .zentria-typing {
          display: flex;
          gap: 4px;
          padding: 10px 12px;
          background: white;
          border-radius: 10px 10px 10px 0;
          border: 1px solid #e1e5e9;
          max-width: 60px;
        }
          .zentria-powered-by {
            font-size: 12px;
            font-weight: 500;
            color: #999;
            text-align: center;
            margin-bottom: 10px;
          }
        
        .zentria-typing-dot {
          width: 6px;
          height: 6px;
          background: #999;
          border-radius: 50%;
          animation: zentria-bounce 1.4s infinite ease-in-out both;
        }
        
        .zentria-typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .zentria-typing-dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes zentria-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        /* Welcome Popup Styles - Chat Bubble Design */
        .zentria-welcome-popup {
          position: absolute;
          bottom: 85px;
          right: -5px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px 20px 5px 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1);
          padding: 0;
          max-width: 320px;
          min-width: 280px;
          z-index: 10002;
          transform: scale(0.8) translateY(20px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
        }

        .zentria-welcome-popup.show {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* Speech bubble tail */
        .zentria-welcome-popup::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: 25px;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 12px solid #764ba2;
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.1));
        }

        /* Animated shine effect */
        .zentria-welcome-popup::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.2),
            transparent
          );
          transition: left 0.6s;
        }

        .zentria-welcome-popup.show::before {
          left: 100%;
        }

        .zentria-popup-content {
          padding: 24px;
          color: white;
          position: relative;
        }

        .zentria-popup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .zentria-popup-bot-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .zentria-popup-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .zentria-popup-name {
          font-weight: 700;
          color: white;
          font-size: 16px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .zentria-popup-close {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          cursor: pointer;
          font-size: 20px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .zentria-popup-close:hover {
          background: rgba(255,255,255,0.3);
          transform: scale(1.1);
        }

        .zentria-popup-message {
          color: rgba(255,255,255,0.95);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 20px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .zentria-popup-actions {
          display: flex;
          gap: 12px;
        }

        .zentria-popup-button {
          flex: 1;
          padding: 12px 18px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-transform: none;
          letter-spacing: 0.3px;
        }

        .zentria-popup-primary {
          background: white;
          color: #667eea;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .zentria-popup-primary:hover {
          background: #f8f9ff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .zentria-popup-secondary {
          background: rgba(255,255,255,0.2);
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
        }

        .zentria-popup-secondary:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }

        /* Floating animation */
        @keyframes zentria-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        .zentria-welcome-popup.show {
          animation: zentria-float 3s ease-in-out infinite;
        }

        /* Mobile styles for popup */
        @media (max-width: 768px) {
          .zentria-welcome-popup {
            max-width: calc(100vw - 80px);
            min-width: 260px;
            bottom: 80px;
            right: -10px;
          }
          
          .zentria-popup-content {
            padding: 20px;
          }
          
          .zentria-popup-avatar {
            width: 36px;
            height: 36px;
            font-size: 14px;
          }
          
          .zentria-popup-name {
            font-size: 15px;
          }
          
          .zentria-popup-message {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .zentria-welcome-popup {
            max-width: calc(100vw - 60px);
            min-width: 240px;
            bottom: 75px;
            right: -15px;
          }
          
          .zentria-popup-content {
            padding: 18px;
          }

          .zentria-popup-button {
            padding: 10px 14px;
            font-size: 13px;
          }
        }
      </style>
      
      <div class="zentria-chat-window" id="zentria-chat-window">
        <div class="zentria-chat-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 8px; height: 8px; background: #4ade80; border-radius: 50%;"></div>
            <span id="zentria-bot-name">${config.botName}</span>
          </div>
          <button class="zentria-close-button" onclick="zentriaCloseChat()">×</button>
        </div>
        
        <div class="zentria-chat-messages" id="zentria-messages">
          <div class="zentria-message bot">
            <div class="zentria-message-content" id="zentria-greeting">${config.greeting}</div>
          </div>
        </div>
        
        <div class="zentria-chat-input">
          <input 
            type="text" 
            class="zentria-input-field" 
            id="zentria-input"
            placeholder="Ask ${config.botName}..."
            onkeypress="zentriaHandleKeyPress(event)"
          />
          <button class="zentria-send-button" onclick="zentriaSendMessage()">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
          </button>
        </div>
        <p class="zentria-powered-by">Powered by Zaakiy</p>
      
      </div>
      
      <!-- Welcome Popup -->
      <div class="zentria-welcome-popup" id="zentria-welcome-popup">
        <div class="zentria-popup-content">
          <div class="zentria-popup-header">
            <div class="zentria-popup-bot-info">
              <div class="zentria-popup-avatar" id="zentria-popup-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div class="zentria-popup-name" id="zentria-popup-name">${config.botName}</div>
            </div>
            <button class="zentria-popup-close" onclick="zentriaCloseWelcomePopup()">×</button>
          </div>
          <div class="zentria-popup-message" id="zentria-popup-message">
            ${config.greeting}
          </div>
          <div class="zentria-popup-actions">
            <button class="zentria-popup-button zentria-popup-primary" onclick="zentriaStartChat()">
              💬 Start Chat
            </button>
            <button class="zentria-popup-button zentria-popup-secondary" onclick="zentriaCloseWelcomePopup()">
              Maybe Later
            </button>
          </div>
        </div>
      </div>

      <button class="zentria-chat-button" onclick="zentriaToggleChat()">
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)" stroke="#ffffff" stroke-width="1.5"></circle> <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C10.1786 2 8.47087 2.48697 7 3.33782M21.8 10C21.9311 10.6462 22 11.3151 22 12C22 17.5228 17.5228 22 12 22C10.4003 22 8.88837 21.6244 7.54753 20.9565C7.19121 20.7791 6.78393 20.72 6.39939 20.8229L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L3.17712 17.6006C3.28001 17.2161 3.22094 16.8088 3.04346 16.4525C2.37562 15.1116 2 13.5997 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
      </button>
    `;
    
    document.body.appendChild(widgetContainer);
  }

  // Load chatbot configuration
  async function loadChatbotConfig() {
    try {
      // If we have a specific chatbot ID, get it from the public API
      if (config.chatbotId) {
        const detailResponse = await fetch(`${config.apiUrl}/api/public/chatbot/${config.chatbotId}/config`);
        if (detailResponse.ok) {
          selectedChatbot = await detailResponse.json();
          
          // Update config with chatbot details
          config.primaryColor = selectedChatbot.color_hex || config.primaryColor;
          config.botName = selectedChatbot.name || config.botName;
          config.greeting = selectedChatbot.greeting_message || config.greeting;
          
          // Update UI with new config
          updateWidgetAppearance();
          return Promise.resolve();
        }
      }
      
      console.warn('No chatbot ID provided or failed to load chatbot config');
      return Promise.resolve();
    } catch (error) {
      console.warn('Failed to load chatbot config:', error);
      return Promise.resolve();
    }
  }

  // Update widget appearance based on loaded config
  function updateWidgetAppearance() {
    const button = document.querySelector('.zentria-chat-button');
    const header = document.querySelector('.zentria-chat-header');
    const sendButton = document.querySelector('.zentria-send-button');
    const inputField = document.querySelector('#zentria-input');
    const botNameElement = document.querySelector('#zentria-bot-name');
    const greetingMessage = document.querySelector('#zentria-greeting');
    
    if (button) {
      button.style.background = config.primaryColor;
    }
    
    if (header) {
      header.style.background = config.primaryColor;
    }
    
    if (sendButton) {
      sendButton.style.background = config.primaryColor;
    }
    
    // Update all user message backgrounds
    const userMessages = document.querySelectorAll('.zentria-message.user .zentria-message-content');
    userMessages.forEach(message => {
      message.style.background = config.primaryColor;
    });
    
    if (inputField) {
      inputField.placeholder = `Ask ${config.botName}...`;
    }
    
    if (botNameElement) {
      botNameElement.textContent = config.botName;
    }
    
    if (greetingMessage) {
      greetingMessage.textContent = config.greeting;
    }
    
    // Update popup appearance
    updatePopupAppearance();
  }

  // Widget functions
  window.zentriaOpenChat = function() {
    const chatWindow = document.getElementById('zentria-chat-window');
    chatWindow.style.display = 'flex';
    chatWindowVisible = true;
    
    // Clear unread messages when chat is opened
    clearUnreadMessages();
    
    // Close welcome popup when chat opens
    const welcomePopup = document.getElementById('zentria-welcome-popup');
    if (welcomePopup && welcomePopup.classList.contains('show')) {
      zentriaCloseWelcomePopup();
    }
  };

  window.zentriaCloseChat = function() {
    document.getElementById('zentria-chat-window').style.display = 'none';
    chatWindowVisible = false;
  };


  window.zentriaToggleChat = function() {
    const chatWindow = document.getElementById('zentria-chat-window');
    
    // Always close welcome popup when chat button is clicked
    const welcomePopup = document.getElementById('zentria-welcome-popup');
    if (welcomePopup && welcomePopup.classList.contains('show')) {
      zentriaCloseWelcomePopup();
    }
    
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
      // Open chat
      zentriaOpenChat();
    } else {
      // If open, close it
      zentriaCloseChat();
    }
  };

  window.zentriaSendMessage = function() {
    const input = document.getElementById('zentria-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    zentriaAddMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    zentriaShowTyping();
    
    // Send to API using the public endpoint
    fetch(`${config.apiUrl}/api/public/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        chatbot_id: selectedChatbot?.id || config.chatbotId,
        session_id: conversationId || 'anonymous'
      })
    })
    .then(response => response.json())
    .then(data => {
      zentriaHideTyping();
      
      // Store session ID for follow-up messages
      if (data.session_id && !conversationId) {
        conversationId = data.session_id;
      }
      
      zentriaAddMessage(data.response || 'Sorry, I had trouble processing that.', 'bot');
      
      // Add unread message notification if chat is not visible
      if (!chatWindowVisible) {
        addUnreadMessage();
      }
    })
    .catch(() => {
      zentriaHideTyping();
      zentriaAddMessage('Sorry, I\'m having connection issues. Please try again.', 'bot');
      
      // Add unread message notification for error messages too
      if (!chatWindowVisible) {
        addUnreadMessage();
      }
    });
  };

  window.zentriaHandleKeyPress = function(event) {
    if (event.key === 'Enter') {
      zentriaSendMessage();
    }
  };

  function zentriaAddMessage(content, type) {
    const messagesContainer = document.getElementById('zentria-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `zentria-message ${type}`;
    
    // Format the content to preserve structure
    const formattedContent = formatMessageContent(content);
    
    const messageContent = document.createElement('div');
    messageContent.className = 'zentria-message-content';
    messageContent.innerHTML = formattedContent;
    
    // Apply dynamic color for user messages
    if (type === 'user') {
      messageContent.style.background = config.primaryColor;
      messageContent.style.color = 'white';
    }
    
    // Add timestamp
    const timestamp = document.createElement('div');
    timestamp.className = 'zentria-message-timestamp';
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestamp.textContent = timeString;
    
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(timestamp);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function formatMessageContent(content) {
    // Escape HTML to prevent XSS
    let formatted = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    
    // Convert line breaks to <br> tags
    formatted = formatted.replace(/\n/g, '<br>');
    
    // Format bullet points and lists
    formatted = formatted.replace(/^[-•]\s*(.+)$/gm, '<li>$1</li>');
    
    // Format numbered lists
    formatted = formatted.replace(/^\d+\.\s*(.+)$/gm, '<li>$1</li>');
    
    // Wrap consecutive list items in appropriate list tags
    formatted = formatted.replace(/(<li>.*<\/li>)(\s*<li>.*<\/li>)*/gs, function(match) {
      // Check if this is a numbered list by looking for numbers in the original content
      const hasNumbers = content.match(/\d+\./);
      if (hasNumbers) {
        return '<ol>' + match + '</ol>';
      } else {
        return '<ul>' + match + '</ul>';
      }
    });
    
    // Format bold text (**text** or __text__)
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    // Format italic text (*text* or _text_)
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/_(.*?)_/g, '<em>$1</em>');
    
    // Format code blocks (```code```)
    formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Format inline code (`code`)
    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Format links [text](url)
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Format prices and currency
    formatted = formatted.replace(/(\d+\.\d+)/g, '<span class="price">$1</span>');
    
    return formatted;
  }

  function zentriaShowTyping() {
    const messagesContainer = document.getElementById('zentria-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'zentria-message bot';
    typingDiv.id = 'zentria-typing';
    typingDiv.innerHTML = `
      <div class="zentria-typing">
        <div class="zentria-typing-dot"></div>
        <div class="zentria-typing-dot"></div>
        <div class="zentria-typing-dot"></div>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function zentriaHideTyping() {
    const typingElement = document.getElementById('zentria-typing');
    if (typingElement) {
      typingElement.remove();
    }
  }

  // Welcome popup functions
  window.zentriaShowWelcomePopup = function() {
    const popup = document.getElementById('zentria-welcome-popup');
    const chatButton = document.querySelector('.zentria-chat-button');
    
    console.log('zentriaShowWelcomePopup called - popup element:', popup, 'chatButton:', chatButton);
    
    if (popup) {
      // Show popup with animation
      setTimeout(() => {
        popup.classList.add('show');
        console.log('Welcome popup should now be visible');
      }, 100);
    } else {
      console.error('Welcome popup element not found in DOM');
    }
    
    if (chatButton) {
      // Add notification indicator to chat button
      chatButton.classList.add('has-notification');
      console.log('Added notification indicator to chat button');
    } else {
      console.error('Chat button element not found in DOM');
    }
  };

  window.zentriaCloseWelcomePopup = function() {
    const popup = document.getElementById('zentria-welcome-popup');
    const chatButton = document.querySelector('.zentria-chat-button');
    
    if (popup) {
      popup.classList.remove('show');
      // Store that user has seen the popup
      localStorage.setItem('zentria-welcome-shown', 'true');
    }
    
    if (chatButton) {
      // Remove notification indicator from chat button
      chatButton.classList.remove('has-notification');
    }
  };

  window.zentriaStartChat = function() {
    // Close welcome popup first
    zentriaCloseWelcomePopup();
    
    // Open chat window after a brief delay to allow popup animation to complete
    setTimeout(() => {
      zentriaOpenChat();
      
      // Focus on input field after chat opens
      setTimeout(() => {
        const input = document.getElementById('zentria-input');
        if (input) {
          input.focus();
        }
      }, 100);
    }, 150);
  };

  function updatePopupAppearance() {
    const popup = document.querySelector('.zentria-welcome-popup');
    const popupName = document.querySelector('#zentria-popup-name');
    const popupMessage = document.querySelector('#zentria-popup-message');
    
    if (popupName) {
      popupName.textContent = config.botName;
    }
    
    if (popupMessage) {
      popupMessage.textContent = config.greeting;
    }
    
    // Update popup gradient colors based on primary color
    if (popup) {
      const primaryColor = config.primaryColor;
      // Create a complementary gradient
      const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}aa 100%)`;
      popup.style.background = gradient;
      
      // Update the tail color to match
      const tailColor = primaryColor + 'aa';
      popup.style.setProperty('--tail-color', tailColor);
    }
  }

  function initializeWelcomePopup() {
    // Check if user has already seen the popup
    const hasSeenWelcome = localStorage.getItem('zentria-welcome-shown');
    
    console.log('Zentria Welcome Popup - hasSeenWelcome:', hasSeenWelcome);
    
    // FOR TESTING: Always show popup (disable localStorage check)
    // Comment out this section and uncomment the production version below when ready
    console.log('Zentria Welcome Popup - Scheduling popup to show in 2 seconds (testing mode)');
    setTimeout(() => {
      console.log('Zentria Welcome Popup - Showing popup now');
      zentriaShowWelcomePopup();
    }, 2000); // Show after 2 seconds
    
    // PRODUCTION VERSION (uncomment when ready for production):
    // if (!hasSeenWelcome) {
    //   console.log('Zentria Welcome Popup - Scheduling popup to show in 2 seconds');
    //   setTimeout(() => {
    //     console.log('Zentria Welcome Popup - Showing popup now');
    //     zentriaShowWelcomePopup();
    //   }, 2000);
    // } else {
    //   console.log('Zentria Welcome Popup - User has already seen the welcome popup');
    // }
  }

  // Global function to reset the welcome popup (for testing)
  window.zentriaResetWelcomePopup = function() {
    localStorage.removeItem('zentria-welcome-shown');
    console.log('Zentria Welcome Popup - Reset completed. Reload page to see popup again.');
  };

  // Global function to force show popup (for testing)
  window.zentriaForceShowPopup = function() {
    console.log('Zentria Welcome Popup - Force showing popup');
    zentriaShowWelcomePopup();
  };

  // Unread message management
  let unreadMessageCount = 0;
  let chatWindowVisible = false;

  // Function to add unread message notification
  function addUnreadMessage() {
    // Only count as unread if chat window is closed
    if (!chatWindowVisible) {
      unreadMessageCount++;
      updateUnreadBadge();
    }
  }

  // Function to clear unread messages
  function clearUnreadMessages() {
    unreadMessageCount = 0;
    updateUnreadBadge();
  }

  // Function to update the unread badge
  function updateUnreadBadge() {
    const chatButton = document.querySelector('.zentria-chat-button');
    if (!chatButton) return;

    if (unreadMessageCount > 0) {
      chatButton.classList.add('has-unread');
      chatButton.setAttribute('data-unread-count', unreadMessageCount > 99 ? '99+' : unreadMessageCount.toString());
    } else {
      chatButton.classList.remove('has-unread');
      chatButton.removeAttribute('data-unread-count');
    }
  }

  // Global functions for unread message management
  window.zentriaAddUnreadMessage = function() {
    addUnreadMessage();
  };

  window.zentriaClearUnreadMessages = function() {
    clearUnreadMessages();
  };

  window.zentriaGetUnreadCount = function() {
    return unreadMessageCount;
  };

  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('DOM loaded, creating widget...');
      createWidget();
      loadChatbotConfig().then(() => {
        console.log('Chatbot config loaded, initializing welcome popup...');
        // Add a small delay to ensure DOM is fully ready
        setTimeout(() => {
          initializeWelcomePopup();
        }, 100);
      });
    });
  } else {
    console.log('DOM already ready, creating widget...');
    createWidget();
    loadChatbotConfig().then(() => {
      console.log('Chatbot config loaded, initializing welcome popup...');
      // Add a small delay to ensure DOM is fully ready
      setTimeout(() => {
        initializeWelcomePopup();
      }, 100);
    });
  }
})();