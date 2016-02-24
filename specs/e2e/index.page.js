/* global browser, element, by */

'use strict';

var IndexPage = function () {

  this.ignoreSynchronization = function () {
    browser.ignoreSynchronization = true;
  };

  this.get = function (url) {
    browser.get(url);
  };

  this.waitForAngular = function () {
    browser.waitForAngular();
  };

  this.getTitle = function () {
    browser.getTitle();
  };

  // container
  this.container = element(by.css('.container'));

  //select elements
  this.selectElements = element.all(by.tagName('select'));
  this.selectFirstElement = this.selectElements.get(0);

};

module.exports = new IndexPage();
