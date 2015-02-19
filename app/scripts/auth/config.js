'use strict'

module.exports = [
  '$urlRouterProvider',
  '$stateProvider',
  function authConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('auth', {
        url : '/auth',
        templateUrl: 'views/auth/root.html'
      })
      .state('auth.login', {
        name : '/login',
        template : 'Hello from login'
      })
      .state('auth.reset-password', {
        name : '/reset-password',
        template : 'Hello from password reset'
      });
  }
];

