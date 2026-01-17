/**
 * Load and Performance Tests for Frontend
 * Simulates multiple concurrent users
 */

interface LoadTestResult {
  testName: string;
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  minResponseTime: number;
  maxResponseTime: number;
  requestsPerSecond: number;
  duration: number;
}

interface RequestResult {
  success: boolean;
  responseTime: number;
  error?: string;
}

class LoadTester {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  /**
   * Simulate concurrent API calls
   */
  async simulateConcurrentRequests(
    url: string,
    concurrentUsers: number,
    requestsPerUser: number
  ): Promise<LoadTestResult> {
    const startTime = Date.now();
    const results: RequestResult[] = [];

    console.log(`\n🔄 Starting load test: ${concurrentUsers} users, ${requestsPerUser} requests each`);

    // Create promises for all users
    const userPromises = Array.from({ length: concurrentUsers }, (_, userIndex) =>
      this.simulateUser(url, requestsPerUser, userIndex)
    );

    // Execute all users concurrently
    const userResults = await Promise.all(userPromises);

    // Flatten results
    userResults.forEach((userResult) => {
      results.push(...userResult);
    });

    const endTime = Date.now();
    const duration = endTime - startTime;

    // Calculate statistics
    const successful = results.filter((r) => r.success).length;
    const failed = results.filter((r) => !r.success).length;
    const responseTimes = results
      .filter((r) => r.success)
      .map((r) => r.responseTime);

    const avgResponseTime =
      responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length || 0;
    const minResponseTime = Math.min(...responseTimes);
    const maxResponseTime = Math.max(...responseTimes);
    const requestsPerSecond = (results.length / duration) * 1000;

    return {
      testName: `${concurrentUsers} concurrent users`,
      totalRequests: results.length,
      successfulRequests: successful,
      failedRequests: failed,
      averageResponseTime: Math.round(avgResponseTime),
      minResponseTime: Math.round(minResponseTime),
      maxResponseTime: Math.round(maxResponseTime),
      requestsPerSecond: Math.round(requestsPerSecond * 100) / 100,
      duration: Math.round(duration),
    };
  }

  /**
   * Simulate a single user making multiple requests
   */
  private async simulateUser(
    url: string,
    requestCount: number,
    userIndex: number
  ): Promise<RequestResult[]> {
    const results: RequestResult[] = [];

    for (let i = 0; i < requestCount; i++) {
      const result = await this.makeRequest(`${this.baseUrl}${url}`);
      results.push(result);

      // Small delay between requests from same user
      await this.sleep(50);
    }

    return results;
  }

  /**
   * Make a single HTTP request and measure response time
   */
  private async makeRequest(url: string): Promise<RequestResult> {
    const startTime = Date.now();

    try {
      const response = await fetch(url);
      const endTime = Date.now();

      return {
        success: response.ok,
        responseTime: endTime - startTime,
        error: response.ok ? undefined : `HTTP ${response.status}`,
      };
    } catch (error) {
      const endTime = Date.now();
      return {
        success: false,
        responseTime: endTime - startTime,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Sleep for specified milliseconds
   */
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Print test results
   */
  printResults(result: LoadTestResult): void {
    console.log('\n📊 Load Test Results:');
    console.log('━'.repeat(60));
    console.log(`Test: ${result.testName}`);
    console.log(`Duration: ${result.duration}ms`);
    console.log(`Total Requests: ${result.totalRequests}`);
    console.log(`✅ Successful: ${result.successfulRequests}`);
    console.log(`❌ Failed: ${result.failedRequests}`);
    console.log(`Success Rate: ${((result.successfulRequests / result.totalRequests) * 100).toFixed(1)}%`);
    console.log(`\n⏱️  Response Times:`);
    console.log(`  Average: ${result.averageResponseTime}ms`);
    console.log(`  Min: ${result.minResponseTime}ms`);
    console.log(`  Max: ${result.maxResponseTime}ms`);
    console.log(`\n🚀 Throughput: ${result.requestsPerSecond} requests/second`);
    console.log('━'.repeat(60));
  }
}

/**
 * Run comprehensive load tests
 */
async function runLoadTests() {
  const tester = new LoadTester();
  const results: LoadTestResult[] = [];

  console.log('\n🎯 Frontend Load Testing Suite\n');

  // Test 1: Light load (10 users)
  console.log('Test 1: Light Load');
  const lightLoad = await tester.simulateConcurrentRequests('/api/chat/health', 10, 5);
  tester.printResults(lightLoad);
  results.push(lightLoad);

  // Test 2: Medium load (50 users)
  console.log('\n\nTest 2: Medium Load');
  const mediumLoad = await tester.simulateConcurrentRequests('/api/chat/health', 50, 10);
  tester.printResults(mediumLoad);
  results.push(mediumLoad);

  // Test 3: Heavy load (100 users)
  console.log('\n\nTest 3: Heavy Load');
  const heavyLoad = await tester.simulateConcurrentRequests('/api/chat/health', 100, 10);
  tester.printResults(heavyLoad);
  results.push(heavyLoad);

  // Test 4: Spike test (200 users)
  console.log('\n\nTest 4: Spike Test');
  const spikeLoad = await tester.simulateConcurrentRequests('/api/chat/health', 200, 5);
  tester.printResults(spikeLoad);
  results.push(spikeLoad);

  // Summary
  console.log('\n\n📈 Summary of All Tests:\n');
  results.forEach((result, index) => {
    console.log(`Test ${index + 1}: ${result.testName}`);
    console.log(`  Success Rate: ${((result.successfulRequests / result.totalRequests) * 100).toFixed(1)}%`);
    console.log(`  Avg Response: ${result.averageResponseTime}ms`);
    console.log(`  Throughput: ${result.requestsPerSecond} req/s\n`);
  });

  // Performance criteria
  console.log('\n✅ Performance Criteria:');
  const avgResponseTime = results.reduce((sum, r) => sum + r.averageResponseTime, 0) / results.length;
  const avgSuccessRate = results.reduce((sum, r) => (r.successfulRequests / r.totalRequests) * 100, 0) / results.length;

  console.log(`Average Response Time: ${Math.round(avgResponseTime)}ms ${avgResponseTime < 1000 ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Average Success Rate: ${avgSuccessRate.toFixed(1)}% ${avgSuccessRate > 95 ? '✅ PASS' : '❌ FAIL'}`);

  return results;
}

// Run if executed directly
if (require.main === module) {
  runLoadTests()
    .then(() => {
      console.log('\n✅ Load tests completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Load tests failed:', error);
      process.exit(1);
    });
}

export { LoadTester, runLoadTests };









