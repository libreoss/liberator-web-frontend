'use strict';

require('angular');
require('angular-resource');
require('./auth/app.js');
require('./new_article/app.js');
require('./archive/app.js');
require('./api/app.js');
require('./article/app.js');
/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router'),
    'Liberator.api',
    'Liberator.auth',
    'Liberator.new_article',
    'Liberator.archive',
    'Liberator.article',
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'))

  .constant('API_URL', 'http://192.168.66.6:8000/api/v1/');


