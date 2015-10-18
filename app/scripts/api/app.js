'use strict'

require('angular');

angular.module('Liberator.api', [
    require('angular-ui-router'),
])
    .service('articles', require('./articlesService.js'))
    .service('users', require('./userService.js'))
    .service('titles', require('./titleService.js'))
    .service('states', require('./stateService.js'))
    .service('utils', require('./utils.js'));
