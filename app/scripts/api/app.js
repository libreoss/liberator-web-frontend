'use strict'

require('angular');

angular.module('Liberator.api', [
    require('angular-ui-router'),
])
    .service('articles', require('./articlesService.js'))
    .service('users', require('./userService.js'));
