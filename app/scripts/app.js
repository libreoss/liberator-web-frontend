'use strict';

require('angular');
require('./auth/app.js');
/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router'),
    'Liberator.auth'
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'))

  .constant('API_URL', 'http://192.168.66.6:8000/api/v1/');


