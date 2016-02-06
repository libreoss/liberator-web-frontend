'use strict';

require('angular');
require('./auth/app.js');
require('./article/app.js');
require('./section/app.js');
require('./user/app.js');
require('./issue/app.js');
/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router'),
    'Liberator.auth',
    'Liberator.Article',
    'Liberator.Section',
    'Liberator.User',
    'Liberator.Issue',
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'))

  .constant('API_URL', 'http://0.0.0.0:8000/api/v1/');


