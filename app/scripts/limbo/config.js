'use strict'

module.exports = [
  '$stateProvider',
  function LimboConfig($stateProvider) {
  
    $stateProvider
      .state('limbo-main', {
	      url : '/limbo/main',
	      templateUrl: 'scripts/limbo/views/limbo.html',
      	controller: 'LimboController'
      })

      .state('limbo-check', {
	      url : '/limbo/check/:username/:articleId/:languageId/',
	      templateUrl: 'scripts/limbo/views/check.html',
      	controller: 'LimboCheckController'
      })
  }
];
