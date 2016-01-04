'use strict'

module.exports = [
  '$scope',
  'ArticleService',
  '$state',
  '$stateParams',

  function ArticleController($scope, ArticleService, $state, $stateParams) {
    
    function listArticles() 
    {
      ArticleService.listArticles()
        .then(
          function (response) 
          {
            console.log(response.data);
            $scope.articles = response.data;
          }
        );
    }
    
    $scope.articleDelete = function(articleId) 
    {
      ArticleService.deleteArticle(articleId)
        .then(listArticles);
    }

    listArticles();
  }
];

