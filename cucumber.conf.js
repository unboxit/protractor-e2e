/* global jasmine, exports, require, browser */

'use strict';

exports.config = {

  rootElement: 'body',

  framework: 'cucumber',

  baseUrl: 'http://localhost:8080',

  seleniumServerJar: './node_modules/selenium-standalone/.selenium/selenium-server/2.46.0-server.jar',

  specs: [
    './specs/features/*.feature'
  ],

  capabilities: {
    'browserName': 'phantomjs'
  },

  // Options to be passed to Cucumber.
  cucumberOpts: {
    // Require files before executing the features.
    require: './specs/features/step_definitions/*.js',
    // Only execute the features or scenarios with tags matching @dev.
    // This may be an array of strings to specify multiple tags to include.
    tags: '@dev',
    // How to format features (default: progress)
    format: 'summary'
  }
};
