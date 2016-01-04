'use strict'

module.exports = [
  '$stateProvider',
  function ArticleConfig($stateProvider) {
  
    $stateProvider
      .state('article-list', {
	      url : '/articles',
	      //public: true,
	      templateUrl: 'scripts/article/views/list.html',
      	controller: 'ArticleController'
      });
      /*
      .state('article.read', {
	      url: '/articles/:articleId',
	      public: true,
	      templateUrl: 'scripts/article/views/read.html'
      })*/
  }
];
