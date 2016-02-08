'use strict'

module.exports = [
  '$scope',
  'ArticleService',
  '$state',
  '$stateParams',

  function ArticleReadController($scope, ArticleService, $state, $stateParams) {
    
    $scope.current_content = {};

    ArticleService.readArticle($stateParams.articleId).then(
      function (response) 
      {
        $scope.article = response.data
      }
    );

    ArticleService.getContents($stateParams.articleId).then(
      function (response) 
      {
        $scope.contents = response.data;
      }
    );

    $scope.articleDelete = function(articleId) 
    {
      ArticleService.deleteArticle(articleId)
        .then(listArticles);
    };

    $scope.changeContent = function(content) 
    {
      $scope.current_content = content;
    }
  }
];

