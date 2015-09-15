/* global describe, require, browser */
'use strict';

describe('Protractor E2E', function () {

  var page;

  beforeEach(function () {
    page = require('./index.page');
    page.get('#/one');
    page.waitForAngular();
  });

  describe('#index', function () {

    it("returns all select elements", function () {
      expect(page.container.isElementPresent)
        .toBeTruthy();
      expect(page.selectElements.count())
        .toBeGreaterThan(0);
    });

  });

});
