import { getAuthInfo } from './auth';

// Add this to your frontend codebase
export const testBackendConnection = async () => {
  try {
    // Basic health check
    const rootResponse = await fetch('http://localhost:8001/', {
      method: 'GET',
    });
    
    console.log('API Root Response:', await rootResponse.text());
    
    // Auth check - use proper authentication from Supabase session
    let authStatus = false;
    let authResponse = null;
    
    try {
      const { token } = await getAuthInfo();
      
      authResponse = await fetch('http://localhost:8001/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log('Auth Response Status:', authResponse.status);
      console.log('Auth Response:', await authResponse.text());
      authStatus = authResponse.ok;
    } catch (authError) {
      console.warn('Auth test failed (user may not be logged in):', authError);
      // This is expected if user is not authenticated
    }
    
    return {
      rootStatus: rootResponse.ok,
      authStatus: authStatus
    };
  } catch (error) {
    console.error('Backend connection test error:', error);
    return {
      rootStatus: false,
      authStatus: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
};