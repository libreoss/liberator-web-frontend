'use strict'

module.exports = [
  '$urlRouterProvider',
  '$stateProvider',
  function authConfig($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('auth', {
        url : '/auth',
        abstract: true,
        template: 'Hello from auth'
      })
      .state('auth.login', {
        url: '/login',
        public: true,
        template : 'Hello from login'
      })
      .state('auth.reset-password', {
        url: '/reset-password',
        public: true,
        template : 'Hello from password reset'
      });
  }
];

