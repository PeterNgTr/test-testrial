const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*.test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://testrial.com/',
      browser: "chrome",
      screenSize: "maximize",
      host: "yourOrgIdHere.gateway.testrial.com",
      waitForTimeout: 10000,
      desiredCapabilities: {
        "testrial:options": {
          name: "My first test"
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test-testrial',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}