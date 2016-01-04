'use strict';

require('angular');
require('./auth/app.js');
require('./article/app.js');
/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router'),
    'Liberator.auth',
    'Liberator.Article',
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'))

  .constant('API_URL', 'http://0.0.0.0:8000/api/v1/');


