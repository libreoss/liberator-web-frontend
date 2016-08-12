'use strict';

require('angular');

require('./auth/app.js');
require('./article/app.js');
require('./section/app.js');
require('./user/app.js');
require('./issue/app.js');
require('./language/app.js');
require('./state/app.js');
require("./limbo/app.js");
require("./media/app.js")
/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router'),
    require('angular-sanitize'),
    'Liberator.auth',
    'Liberator.Article',
    'Liberator.Section',
    'Liberator.User',
    'Liberator.Issue',
    'Liberator.Language',
    'Liberator.State',
    'Liberator.Limbo',
    'Liberator.Media'
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'))

  .constant('API_URL', 'http://0.0.0.0:8000/api/v1/');


