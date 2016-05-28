'use strict';

require('angular');

angular.module('Liberator.Limbo',[
  require('angular-ui-router'), // optional dependencies for module
  require('angular-contenteditable'),
  //require('angular-messages')
  'Liberator.User',
])

  .config(require('./config'))

  .controller('LimboController', require('./controller.js'))

  .service('LimboService', require('./service.js'))

  .directive("limboAddWord", require("./add-word-directive.js"));
