'use strict'

module.exports = [
  '$scope',
  '$state',
  '$stateParams',
  'ArticleService',
  'LanguageService',

  function AddContentController($scope, $state, $stateParams, ArticleService, LanguageService) {
    ArticleService.getContents($stateParams.articleId).then(
      function (response) 
      {
        $scope.content = {
          article: $stateParams.articleId,
          language: $stateParams.languageId,
          title: "",
          text: "",
          state: 1,
        }; 
        for (var i = 0; i<response.data.length; i++) 
        {
          if (response.data[i].language == $stateParams.languageId) 
          {
            $scope.content = response.data[i];
          }
        }
      }
    );

    $scope.save = function() 
    {
      ArticleService.addContent($scope.content)
      .then(function (response) 
      {
        $state.go("article-read", {
          articleId: $scope.content.article,
        });
      });
    }

  }
];

