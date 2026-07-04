function getLambdaTestEndpoint(testName, browser = 'chromium') {
  const username = process.env.LT_USERNAME || process.env.LAMBDATEST_USERNAME;
  const accessKey = process.env.LT_ACCESS_KEY || process.env.LAMBDATEST_ACCESS_KEY;
  if (!username || !accessKey) {
    throw new Error('Environment variables LT_USERNAME and LT_ACCESS_KEY must be set');
  }

  const capabilities = {
    browser: browser,
    browserVersion: 'latest',
    platform: 'Windows 10',
    name: testName || 'playwright-test',
    build: process.env.LT_BUILD || 'playwright-build',
    network: true,
    video: true,
    console: true,
    timezone: 'UTC',
    username,
    accessKey
  };

  const ws = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
    JSON.stringify(capabilities)
  )}`;
  return ws;
}

function getLambdaTestCapabilities(testName, browser = 'chromium') {
  const username = process.env.LT_USERNAME || process.env.LAMBDATEST_USERNAME || '';
  const accessKey = process.env.LT_ACCESS_KEY || process.env.LAMBDATEST_ACCESS_KEY || '';
  return {
    capabilities: {
      browser: browser,
      browserVersion: 'latest',
      platform: 'Windows 10',
      name: testName || 'playwright-test',
      build: process.env.LT_BUILD || 'playwright-build',
      network: true,
      video: true,
      console: true,
      timezone: 'UTC',
      username: username,
      accessKey: accessKey
    }
  };
}

module.exports = { getLambdaTestEndpoint, getLambdaTestCapabilities };
