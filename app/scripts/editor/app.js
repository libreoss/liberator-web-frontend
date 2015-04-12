'use strict';

require('angular');

angular.module('Liberator.new_article', [
    require('angular-ui-router'),
])
   .config(require('./config'))
   .controller('newArticleController', require('./controller.js'))
