/* global jasmine, exports, require, browser */

'use strict';

exports.config = {

  rootElement: 'body',

  framework: 'jasmine2',

  baseUrl: 'http://localhost:8080/',

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    'specs/e2e/index.spec.js'
  ],

  // suites: {
  //   smoke: 'specs/smoke/*.js',
  //   full: 'specs/e2e/**/*.spec.js'
  // },

  // If chromeOnly is true, we dont need to stand the selenium server.
  // If you want to test with firefox, then set this to false and change the browserName
  chromeOnly: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--disable-extensions']
    }
  },

  // Options to be passed to minijasminenode.
  //
  // See the full list at https://github.com/juliemr/minijasminenode/tree/jasmine1
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    var tapReporter = new jasmineReporters.TapReporter({
      consolidateAll: true
    });
    jasmine.getEnv().addReporter(tapReporter);
  }

};
