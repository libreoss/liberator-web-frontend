'use strict'

module.exports = [
  '$stateProvider',
  function ArticleConfig($stateProvider) {
  
    $stateProvider
      .state('article-list', {
	      url : '/articles',
	      templateUrl: 'scripts/article/views/list.html',
      	controller: 'ArticleListController'
      })

      .state('article-read', {
	      url: '/articles/:articleId',
      	controller: 'ArticleReadController',
	      templateUrl: 'scripts/article/views/read.html'
      });
  }
];
