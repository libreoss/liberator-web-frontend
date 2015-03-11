'use strict';

require('angular');

angular.module('Liberator.auth',[
  require('angular-ui-router'),
])

  .config(require('./config'))

  .controller('loginControler', require('./controller.js'))

  .service('loginService', require('./service.js'))

  .run(require('./run.js'));
