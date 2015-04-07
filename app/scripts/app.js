'use strict';

require('angular');
require('./auth/app.js');
require('./new_article/app.js');
/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router'),
    'Liberator.auth',
    'Liberator.new_article',
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'))

  .constant('API_URL', 'http://192.168.66.6:8000/api/v1/');


