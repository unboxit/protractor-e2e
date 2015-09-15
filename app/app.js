'use strict';

angular
  .module('app', ['ui.router'])
  .config(function ($compileProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);
  })
  .config(function ($httpProvider) {
    // reduce digest cycles
    $httpProvider.useApplyAsync(true);
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('one', {
        url: '/one',
        templateUrl: './app/modules/one/one.html',
        controller: 'OneCtrl'
      })
      .state('two', {
        url: '/two',
        templateUrl: './app/modules/two/two.html',
        controller: 'TwoCtrl'
      });
    $urlRouterProvider.otherwise('/one');
  });
