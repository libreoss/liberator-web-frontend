'use strict'

module.exports = [
  '$urlRouterProvider',
  '$stateProvider',
  function authConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('auth', {
        url : '/auth',
        templateUrl: 'views/auth/root.html',
      })
      .state('auth.login', {
        name : '/login',
        templateUrl : './views/login.html'
      })
      .state('auth.reset-password', {
        name : '/reset-password',
        templateUrl : './views/rpass.html'
      });
  };
]

