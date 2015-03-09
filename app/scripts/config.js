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
        public: true,
        templateUrl: 'views/app-template.html'
      });

  }
];
