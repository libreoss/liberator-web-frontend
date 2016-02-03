'use strict';

require('angular');

angular.module('Liberator.Article',[
  require('angular-ui-router'), // optional dependencies for module
  require('angular-contenteditable'),
  //require('angular-messages')
])

  .config(require('./config'))

  .controller('ArticleListController', require('./list-controller.js'))
  .controller('ArticleReadController', require('./read-controller.js'))

  .service('ArticleService', require('./service.js'));
