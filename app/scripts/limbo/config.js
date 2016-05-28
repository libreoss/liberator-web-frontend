'use strict'

module.exports = [
  '$stateProvider',
  function LimboConfig($stateProvider) {
  
    $stateProvider
      .state('limbo', {
	      url : '/limbo',
	      templateUrl: 'scripts/limbo/views/limbo.html',
      	controller: 'LimboController'
      })

  }
];
