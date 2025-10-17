// Add this to your frontend codebase
export const testBackendConnection = async () => {
  const token = localStorage.getItem('token');
  
  try {
    // Basic health check
    const rootResponse = await fetch('http://localhost:8001/', {
      method: 'GET',
    });
    
    console.log('API Root Response:', await rootResponse.text());
    
    // Auth check
    const authResponse = await fetch('http://localhost:8001/api/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    console.log('Auth Response Status:', authResponse.status);
    console.log('Auth Response:', await authResponse.text());
    
    return {
      rootStatus: rootResponse.ok,
      authStatus: authResponse.ok
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