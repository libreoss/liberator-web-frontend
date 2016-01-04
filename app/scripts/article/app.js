'use strict';

require('angular');

angular.module('Liberator.Article',[
  require('angular-ui-router'), // optional dependencies for module
  //require('angular-messages')
])

  .config(require('./config'))

  .controller('ArticleController', require('./controller.js'))

  .service('ArticleService', require('./service.js'));
