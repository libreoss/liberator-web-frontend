'use strict';

require('angular');

angular.module('Liberator.auth',[
  require('angular-ui-router'),
])

  .config(require('./config'))

  .controller('LoginController', require('./controller.js'))

  .service('loginService', require('./service.js'))

  .run(require('./run.js'))

  .factory('auuthInterceptor', require('./interceptor.js'));
