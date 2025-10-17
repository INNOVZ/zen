(function() {
  // Configuration
  const config = {
    // Set to your hosted API (use HTTPS in production)
    apiUrl: 'https://your-host.example.com', // Your Next.js app URL
    position: 'bottom-right', // 'bottom-right' or 'bottom-left'
    chatbotId: null, // Specific chatbot ID (optional)
    orgId: null, // Organization ID (optional)
    // Optional: integrator's server endpoint that mints ephemeral tokens for the widget.
    // If provided, the widget will POST to this endpoint to obtain a short-lived token
    // which will be sent in the Authorization header to your backend.
    tokenEndpoint: null,
    // These will be loaded from the API
    primaryColor: '#3B82F6',
    botName: 'Assistant',
    greeting: 'Hi! How can I help you today?',
    avatarUrl: null // Avatar image URL
  };

  // State
  let selectedChatbot = null;
  let conversationId = null;
  let ephemeralToken = null;

  // Convert legacy Supabase URLs to proxy URLs
  function convertLegacyUrl(url) {
    if (!url) return null;
    
    if (url.includes('storage/v1/object/uploads/')) {
      // Extract the path after "uploads/"
      const pathParts = url.split('storage/v1/object/uploads/');
      if (pathParts.length > 1) {
        const filePath = pathParts[1];
        const baseUrl = config.apiUrl.replace('3000', '8001'); // Use backend URL for proxy
        return `${baseUrl}/api/uploads/avatar/legacy/${filePath}`;
      }
    }
    return url;
  }

  // Create widget HTML
  function createWidget() {
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'zentria-chat-widget';
    widgetContainer.innerHTML = `
      <style>
        #zentria-chat-widget {
          position: fixed;
          ${config.position.includes('right') ? 'right: 20px;' : 'left: 20px;'}
          bottom: 20px;
          z-index: 10000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
        }
        
        .zentria-chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        
        .zentria-chat-window {
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
        
        .zentria-chat-header {
          background: ${config.primaryColor};
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .zentria-chat-header-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .zentria-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .zentria-avatar-placeholder {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .zentria-chat-messages {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          background: #f8f9fa;
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
        
        .zentria-message-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .zentria-message-avatar-placeholder {
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
        
        .zentria-message-content {
          max-width: 80%;
          padding: 10px 12px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.4;
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
        }
        
        .zentria-input-field {
          flex: 1;
          padding: 10px 12px;
          border: 1px solid #e1e5e9;
          border-radius: 20px;
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
        }
        
        .zentria-close-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 18px;
          padding: 5px;
        }
        
        .zentria-typing {
          display: flex;
          gap: 4px;
          padding: 10px 12px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e1e5e9;
          max-width: 60px;
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
      </style>
      
      <div class="zentria-chat-window" id="zentria-chat-window">
        <div class="zentria-chat-header">
          <div class="zentria-chat-header-info">
            <div id="zentria-avatar-container">
              <div class="zentria-avatar-placeholder">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
                </svg>
              </div>
            </div>
            <div>
              <div style="width: 8px; height: 8px; background: #4ade80; border-radius: 50%; margin-bottom: 2px;"></div>
              <span id="zentria-bot-name">${config.botName}</span>
            </div>
          </div>
          <button class="zentria-close-button" onclick="zentriaCloseChat()">×</button>
        </div>
        
        <div class="zentria-chat-messages" id="zentria-messages">
          <div class="zentria-message bot">
            <div class="zentria-message-content" id="zentria-greeting"></div>
          </div>
        </div>
        
        <div class="zentria-chat-input">
          <input 
            type="text" 
            class="zentria-input-field" 
            id="zentria-input"
            placeholder="Type your message..."
            onkeypress="zentriaHandleKeyPress(event)"
          />
          <button class="zentria-send-button" onclick="zentriaSendMessage()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <button class="zentria-chat-button" onclick="zentriaOpenChat()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>
    `;
    
    document.body.appendChild(widgetContainer);

    // Set initial greeting text via textContent (avoid injecting HTML)
    const greetingEl = document.getElementById('zentria-greeting');
    if (greetingEl) greetingEl.textContent = config.greeting;
  }

  // Load chatbot configuration
  async function loadChatbotConfig() {
    try {
      const response = await fetch(`${config.apiUrl}/api/chat/chatbots`);
      if (response.ok) {
        const data = await response.json();
        const chatbots = data.chatbots || data || [];
        
        if (chatbots.length > 0) {
          // Select chatbot based on config or use active/first one
          let targetChatbot = null;
          
          if (config.chatbotId) {
            targetChatbot = chatbots.find(bot => bot.id === config.chatbotId);
          }
          
          if (!targetChatbot) {
            targetChatbot = chatbots.find(bot => bot.chain_status === 'active') || chatbots[0];
          }
          
          if (targetChatbot) {
            // Get full chatbot details
            const detailResponse = await fetch(`${config.apiUrl}/api/chat/chatbots/${targetChatbot.id}`);
            if (detailResponse.ok) {
              selectedChatbot = await detailResponse.json();
              
              // Update config with chatbot details
              config.primaryColor = selectedChatbot.color_hex || config.primaryColor;
              config.botName = selectedChatbot.name || config.botName;
              config.greeting = selectedChatbot.greeting_message || config.greeting;
              config.avatarUrl = selectedChatbot.avatar_url || null;
              
              // Update UI with new config
              updateWidgetAppearance();
            }
          }
        }
      }
    } catch (error) {
      console.warn('Failed to load chatbot config:', error);
    }
    // Attempt to fetch ephemeral token if integrator provided a token endpoint
    if (config.tokenEndpoint) {
      try {
        const tokenRes = await fetch(config.tokenEndpoint, { method: 'POST', credentials: 'include' });
        if (tokenRes.ok) {
          const tokenBody = await tokenRes.json();
          ephemeralToken = tokenBody && tokenBody.token ? tokenBody.token : null;
        } else {
          console.warn('token endpoint returned', tokenRes.status);
        }
      } catch (e) {
        console.warn('Failed to fetch ephemeral token:', e);
      }
    }
  }

  // Update widget appearance based on loaded config
  function updateWidgetAppearance() {
    const button = document.querySelector('.zentria-chat-button');
    const header = document.querySelector('.zentria-chat-header');
    const botNameElement = document.querySelector('#zentria-bot-name');
    const greetingMessage = document.querySelector('#zentria-greeting');
    const avatarContainer = document.querySelector('#zentria-avatar-container');
    
    if (button) {
      button.style.background = config.primaryColor;
    }
    
    if (header) {
      header.style.background = config.primaryColor;
    }
    
    if (botNameElement) {
      botNameElement.textContent = config.botName;
    }
    
    if (greetingMessage) {
      greetingMessage.textContent = config.greeting;
    }
    
    // Update avatar safely
    if (avatarContainer) {
      // Clear children
      while (avatarContainer.firstChild) avatarContainer.removeChild(avatarContainer.firstChild);
      if (config.avatarUrl) {
        const convertedUrl = convertLegacyUrl(config.avatarUrl);
        const img = document.createElement('img');
        img.src = convertedUrl;
        img.alt = config.botName || 'bot';
        img.className = 'zentria-avatar';
        avatarContainer.appendChild(img);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'zentria-avatar-placeholder';
        // Use innerHTML for static, trusted SVG markup only
        placeholder.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
          </svg>
        `;
        avatarContainer.appendChild(placeholder);
      }
    }
  }

  // Widget functions
  window.zentriaOpenChat = function() {
    document.getElementById('zentria-chat-window').style.display = 'flex';
  };

  window.zentriaCloseChat = function() {
    document.getElementById('zentria-chat-window').style.display = 'none';
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
    
    // Send to API (include ephemeral token if available)
    const headers = { 'Content-Type': 'application/json' };
    if (ephemeralToken) headers['Authorization'] = 'Bearer ' + ephemeralToken;

    fetch(`${config.apiUrl}/api/chat/conversation`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        message: message,
        chatbot_id: selectedChatbot?.id || config.chatbotId,
        conversation_id: conversationId
      })
    })
    .then(response => response.json())
    .then(data => {
      zentriaHideTyping();

      // Store conversation ID for follow-up messages
      if (data.conversation_id && !conversationId) {
        conversationId = data.conversation_id;
      }

      // Append bot response safely
      zentriaAddMessage(data.response || 'Sorry, I had trouble processing that.', 'bot');
    })
    .catch(() => {
      zentriaHideTyping();
      zentriaAddMessage('Sorry, I\'m having connection issues. Please try again.', 'bot');
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
    
    let avatarHtml = '';
    if (type === 'bot') {
      if (config.avatarUrl) {
        const convertedUrl = convertLegacyUrl(config.avatarUrl);
        avatarHtml = `<img src="${convertedUrl}" alt="${config.botName}" class="zentria-message-avatar" />`;
      } else {
        avatarHtml = `
          <div class="zentria-message-avatar-placeholder">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#6b7280">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
            </svg>
          </div>
        `;
      }
    }
    
    // Build message DOM safely (avoid injecting raw HTML from server)
    if (avatarHtml) {
      const avatarWrapper = document.createElement('div');
      avatarWrapper.innerHTML = avatarHtml; // avatarHtml is generated from trusted local template or img src
      messageDiv.appendChild(avatarWrapper.firstChild);
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'zentria-message-content';
    // Use textContent to avoid HTML injection
    contentDiv.textContent = content;
    messageDiv.appendChild(contentDiv);

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function zentriaShowTyping() {
    const messagesContainer = document.getElementById('zentria-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'zentria-message bot';
    typingDiv.id = 'zentria-typing';
    
    let avatarHtml = '';
    if (config.avatarUrl) {
      const convertedUrl = convertLegacyUrl(config.avatarUrl);
      avatarHtml = `<img src="${convertedUrl}" alt="${config.botName}" class="zentria-message-avatar" />`;
    } else {
      avatarHtml = `
        <div class="zentria-message-avatar-placeholder">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#6b7280">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5C15 10.3 14.3 11 13.5 11H10.5C9.7 11 9 10.3 9 9.5V7.5L3 7V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
          </svg>
        </div>
      `;
    }
    
    // Append avatar safely
    if (avatarHtml) {
      const avatarWrapper = document.createElement('div');
      avatarWrapper.innerHTML = avatarHtml;
      typingDiv.appendChild(avatarWrapper.firstChild);
    }

    const typingInner = document.createElement('div');
    typingInner.className = 'zentria-typing';
    typingInner.innerHTML = '<div class="zentria-typing-dot"></div><div class="zentria-typing-dot"></div><div class="zentria-typing-dot"></div>';
    typingDiv.appendChild(typingInner);
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function zentriaHideTyping() {
    const typingElement = document.getElementById('zentria-typing');
    if (typingElement) {
      typingElement.remove();
    }
  }

  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      createWidget();
      loadChatbotConfig();
    });
  } else {
    createWidget();
    loadChatbotConfig();
  }
})();