/* global browser */
'use strict';

//https://github.com/domenic/chai-as-promised/

var page = require('../../e2e/index.page');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function () {
	this.Given(/^I go to "([^"]*)"$/, function (path, next) {
		page.get('http://localhost:8000' + path);
		next();
	});

	this.Then(/^the title should equal "([^"]*)"$/, function (title, next) {
		expect(browser.getTitle()).to.eventually.equal(title);
		next();
	});

	//this.Then(/^page should have a "([^"]*)" element$/, function (element, next) {
	//	expect(page.container).to.be.truthy;
	//  next();
	//});

};
