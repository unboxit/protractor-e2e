/* global describe, require, browser */
'use strict';

describe('Protractor E2E', function () {

  var page = require('./index.page');

  beforeEach(function () {
    page.get('#/one');
    page.ignoreSynchronization = true;
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
