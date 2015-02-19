'use strict'

module.exports = [
  '$urlRouterProvider',
  '$stateProvider',
  function authConfig($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/auth/');

    $stateProvider
      .state('/auth', {
        url : '/auth',
        templateUrl: 'views/auth/auth.html',
        children : [
          {
            name : 'login',
            templateUrl : 'views/auth/auth.login.html'
          },
          {
            name : 'reset-password',
            templateUlr : 'views/auth/auth.rpass.html'
          }
        ]
      });
  };
]

