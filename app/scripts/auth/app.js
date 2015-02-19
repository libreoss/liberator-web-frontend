'use strict';

require('angular');

angular.module('auth',[
  require('ui-router'),
])

  .config(require('./config'));
