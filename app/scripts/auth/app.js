'use strict';

require('angular');

angular.module('Liberator.auth',[
  require('angular-ui-router'),
])

  .config(require('./config'))

  .service('loginService', require('./service.js'))

  .run(require('./run.js'));
