'use strict';

require('angular');

angular.module('Liberator.archive', [
    require('angular-ui-router'),
    require('angular-resource'),
])
   .config(require('./config'))
   .controller('archiveController', require('./controller.js'));
