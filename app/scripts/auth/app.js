'use strict';

require('angular');

angular.module('auth',[
  require('angular-ui-router'),
])

  .config(require('./config'));
