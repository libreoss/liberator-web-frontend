'use strict'

module.exports = [
  '$stateProvider',
  '$httpProvider',
  function authConfig($stateProvider, $httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');

    $stateProvider
      .state('auth', {
        url : '/auth',
        template: '<div ui-view></div>',
        controller: 'LoginController'
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
