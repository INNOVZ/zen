# Zaakiy Chatbot Widget - Embed Guide

## Quick Start

To embed your Zaakiy chatbot on any website, add this code snippet before the closing `</body>` tag:

```html
<script
  src="https://zaakiy.vercel.app/chatbot-widget.js"
  data-chatbot-id="YOUR_CHATBOT_ID"
  data-api-url="https://zaakiy-production.up.railway.app"
></script>
```

**Replace `YOUR_CHATBOT_ID` with your actual chatbot ID from the dashboard.**

---

## Configuration Options

The widget can be customized using data attributes on the script tag:

### Required Attributes

| Attribute         | Description            | Example                                |
| ----------------- | ---------------------- | -------------------------------------- |
| `data-chatbot-id` | Your unique chatbot ID | `65c0a93d-d62a-4397-97e6-9d85deaaaad6` |

### Optional Attributes

| Attribute       | Description     | Default                                    | Example                         |
| --------------- | --------------- | ------------------------------------------ | ------------------------------- |
| `data-api-url`  | Backend API URL | `https://zaakiy-production.up.railway.app` | Your custom API URL             |
| `data-position` | Widget position | `bottom-right`                             | `bottom-right` or `bottom-left` |

---

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
  </head>
  <body>
    <!-- Your website content -->
    <h1>Welcome to My Website</h1>
    <p>Browse our products and services.</p>

    <!-- Zaakiy Chatbot Widget - Place before closing body tag -->
    <script
      src="https://zaakiy.vercel.app/chatbot-widget.js"
      data-chatbot-id="65c0a93d-d62a-4397-97e6-9d85deaaaad6"
      data-api-url="https://zaakiy-production.up.railway.app"
    ></script>
  </body>
</html>
```

---

## How to Find Your Chatbot ID

1. Log in to your [Zaakiy Dashboard](https://zaakiy.vercel.app/dashboard)
2. Navigate to **Customize** section
3. Click on **Embed Code** button
4. Copy the chatbot ID from the generated code

---

## Features

### ✨ Automatic Customization

- The widget automatically loads your chatbot's:
  - Custom colors
  - Bot name
  - Avatar image
  - Greeting message
  - Tone and personality

### 🔒 Secure & Private

- No authentication required for visitors
- Conversations are tracked by session
- CORS-enabled for cross-origin requests

### 📱 Responsive Design

- Mobile-friendly interface
- Works on all modern browsers
- Auto-adjusts to screen size

### ⚡ Performance

- Lightweight (< 20KB)
- Fast loading
- Minimal impact on page speed

---

## Troubleshooting

### Widget Not Showing?

1. **Check the Console** - Open browser DevTools (F12) and look for errors
2. **Verify Chatbot ID** - Make sure your chatbot ID is correct
3. **Check Chatbot Status** - Ensure your chatbot is **active** in the dashboard
4. **CORS Issues** - The widget should work on any domain, but check for CORS errors

### Common Issues

**Issue**: Widget appears but doesn't respond

- **Solution**: Check that your chatbot is activated in the dashboard

**Issue**: "Chatbot not found" error

- **Solution**: Verify the chatbot ID matches the one in your dashboard

**Issue**: Network errors

- **Solution**: Ensure the backend URL is accessible and CORS is enabled

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Platform-Specific Integration

### WordPress

```html
Add the script tag to your theme's footer.php file or use a plugin like "Insert
Headers and Footers"
```

### Shopify

```html
Go to: Online Store → Themes → Actions → Edit Code → theme.liquid
Add the script before </body>
```

### Webflow

```html
Go to: Project Settings → Custom Code → Footer Code Paste the script tag
```

### Wix

```html
Use the "Custom Code" feature in site settings Add to "End of Body" section
```

---

## API Endpoints Used

The widget uses these public API endpoints (no authentication required):

- **Get Chatbot Config**: `GET /api/public/chatbot/{chatbot_id}/config`
- **Send Message**: `POST /api/public/chat`

---

## Privacy & Data

- Session IDs are generated client-side and stored in localStorage
- No personal data is collected without user input
- All conversations are encrypted in transit (HTTPS)
- Data retention follows your organization's settings

---

## Support

Need help? Contact us:

- 📧 Email: support@zaakiy.com
- 📚 Documentation: https://docs.zaakiy.com
- 💬 Live Chat: Available in your dashboard

---

## Version

Current Widget Version: **2.0**

Last Updated: October 21, 2025
