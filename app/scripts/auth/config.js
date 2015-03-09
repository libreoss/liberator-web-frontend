'use strict'

module.exports = [
  '$stateProvider',
  function authConfig($stateProvider) {

    $stateProvider
      .state('auth', {
        url : '/auth',
        template: '<div ui-view></div>',
      })
      .state('auth.login', {
        url: '/login',
        public: true,
        templateUrl: 'scripts/auth/views/login.html'
      })
      .state('auth.reset-password', {
        url: '/reset-password',
        public: true,
        templateUrl: 'scripts/auth/views/forgot-password.html'
      });
  }
];

