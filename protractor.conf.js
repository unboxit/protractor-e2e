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

  capabilities: {
    'browserName': 'phantomjs',
    //Can be used to specify the phantomjs binary path.
    //This can generally be ommitted if you installed phantomjs globally.
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.cli.args': [
      '--ignore-ssl-errors=true',
      '--web-security=false'
      ]
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
