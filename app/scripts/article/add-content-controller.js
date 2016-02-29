'use strict'

module.exports = [
  '$scope',
  '$state',
  '$stateParams',
  'ArticleService',
  'LanguageService',

  function AddContentController($scope, $state, $stateParams, ArticleService, LanguageService) {
    $scope.content = {
      article: $stateParams.articleId,
      language: $stateParams.languageId,
      title: "",
      text: "",
      state: 1,
    }; 

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

