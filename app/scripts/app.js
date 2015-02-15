'use strict';

require('angular');


/**
 *
 */
angular.module('Liberator', [
    require('angular-ui-router')
  ])

  .config(require('./config.js'))

  .controller('AppController', require('./app-controller.js'));

