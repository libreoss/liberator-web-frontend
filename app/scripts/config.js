'use strict';

module.exports = [
  '$urlRouterProvider',
  '$stateProvider',
  function liberatorConfig($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'AppController',
        templateUrl: 'views/app-template.html'
      });

  }
];
