'use strict';

module.exports = function () {

	this.Given(/^I run Cucumber with Protractor$/, function (callback) {
	  callback();
	});

	this.Then(/^it should still do normal tests$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^it should expose the correct global variables$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Given(/^I go on "([^"]*)"$/, function (arg1, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^the title should equal "([^"]*)"$/, function (arg1, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

};
