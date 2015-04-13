'use strict';

require('angular');

angular.module('Liberator.article', [
    require('angular-ui-router'),
])
  .config(require('./config'))
  .controller('articleController', require('./controller.js'));
