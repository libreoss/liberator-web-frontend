'use strict'

module.exports = [
  '$scope',
  'ArticleService',
  '$state',
  '$stateParams',
  'LanguageService',

  function ArticleReadController($scope, ArticleService, $state, $stateParams, LanguageService) {
    
    $scope.content = {};

    ArticleService.readArticle($stateParams.articleId).then(
      function (response) 
      {
        $scope.article = response.data
      }
    );

    ArticleService.getContents($stateParams.articleId).then(
      function (response) 
      {
        // find content for selected language 
        for (var i = 0; i<response.data.length; i++) 
        {
          if (response.data[i].language == $stateParams.languageId) 
          {
            $scope.content = response.data[i];
          }
        }
      }
    );

    $scope.articleDelete = function(articleId) 
    {
      ArticleService.deleteArticle(articleId)
        .then(listArticles);
    };

  }
];

