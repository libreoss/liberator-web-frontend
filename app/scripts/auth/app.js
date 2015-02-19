'use strict';

require('angular');

angular.module('Liberator.auth',[
  require('angular-ui-router'),
])

  .config(require('./config'));
