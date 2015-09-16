/* global jasmine, exports, require, browser */

'use strict';

exports.config = {

  // rootElement: 'body',

  framework: 'cucumber',

  baseUrl: 'http://localhost:8080',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    './specs/features/*.features'
  ],

  chromeOnly: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--disable-extensions']
    }
  },
  // Options to be passed to Cucumber.
  cucumberOpts: {
    // Require files before executing the features.
    require: './specs/features/step_definitions/index.js',
    // Only execute the features or scenarios with tags matching @dev.
    // This may be an array of strings to specify multiple tags to include.
    tags: '@dev',
    // How to format features (default: progress)
    format: 'summary'
  }
};
