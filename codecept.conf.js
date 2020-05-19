const { getEnvFilePath } = require('./util');

require('dotenv').config({
  path: getEnvFilePath()
});

exports.config = {
  tests: './*.test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: process.env.BASE_URL,
      browser: "chrome",
      screenSize: "maximize",
      host: "64192070-94f8-11ea-b8ab-312339836454.gateway.browserbase.io",
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
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: false,
          steps: true
        }
      },
      'mocha-junit-reporter': {
        stdout: './output/console.log',
        options: {
          mochaFile: './output/result.xml'
        },
        attachments: true
      }
    }
  },
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