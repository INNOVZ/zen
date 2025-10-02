// Quick test script to verify backend connectivity
const BASE_URL = "http://localhost:8001";

async function testEndpoint(url, options = {}) {
  try {
    console.log(`Testing: ${BASE_URL}${url}`);
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test-token',
        ...options.headers
      },
      ...options
    });
    
    const text = await response.text();
    console.log(`Status: ${response.status}`);
    console.log(`Response: ${text.substring(0, 200)}...`);
    console.log('---');
  } catch (error) {
    console.error(`Error testing ${url}:`, error.message);
    console.log('---');
  }
}

async function runTests() {
  console.log('Testing backend endpoints...\n');
  
  await testEndpoint('/api/chat/health');
  await testEndpoint('/api/org/info');
  await testEndpoint('/api/org/chatbots');
  
  console.log('Tests completed.');
}

runTests();