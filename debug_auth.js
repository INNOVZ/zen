// Debug script to test frontend authentication
// Run this in browser console on your frontend page

async function debugAuth() {
  console.log('🔍 Debugging frontend authentication...');
  
  // Check if supabase is available
  if (typeof window !== 'undefined' && window.supabase) {
    console.log('✅ Supabase client found');
    
    try {
      const { data, error } = await window.supabase.auth.getSession();
      
      if (error) {
        console.error('❌ Session error:', error);
        return;
      }
      
      if (data.session) {
        console.log('✅ Active session found');
        console.log('User ID:', data.session.user.id);
        console.log('Email:', data.session.user.email);
        console.log('Token (first 50 chars):', data.session.access_token.substring(0, 50) + '...');
        
        // Test API call
        const response = await fetch('http://localhost:8001/api/org/info', {
          headers: {
            'Authorization': `Bearer ${data.session.access_token}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log('API Response Status:', response.status);
        const result = await response.json();
        console.log('API Response:', result);
        
      } else {
        console.log('❌ No active session - user needs to log in');
      }
      
    } catch (error) {
      console.error('❌ Error checking auth:', error);
    }
  } else {
    console.log('❌ Supabase client not found');
  }
}

debugAuth();