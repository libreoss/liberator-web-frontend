
'use strict'

module.exports = [
  'ArticleService',
  'LanguageService',
  'StateService',
  function myArticleItem(ArticleService, LanguageService, StateService)
  {
    return {
      scope: {
        articleId: "@",
      },
      link: function(scope, elem, attrs) 
      {
        scope.articleDelete = function() 
        {
          ArticleService.deleteArticle(scope.articleId)
            .then(function (response)
            {
              elem.text("Deleted");
            });
        }
      },
      controller: function ($scope, $compile)
      {
        LanguageService.listLanguages().then(function (response) 
        {
          $scope.languages = response.data; 
        });
        ArticleService.readArticle($scope.articleId).then(function (response) 
        {
          $scope.article = response.data;
        });
        ArticleService.getContents($scope.articleId).then(function (response) 
        {
          $scope.contents = response.data;
          for (var i = 0; i < $scope.contents.length; i++) 
          {
            angular.forEach($scope.contents, function (content, key) 
            {
              LanguageService.readLanguage(content.language).then(function (response) 
              {
                content.language = response.data;
              });
              StateService.readState(content.state).then(function (response) 
              {
                content.state = response.data;
              });
            });
          }
        });

      },
      restrict: "E",
      templateUrl: "scripts/article/views/directive.html",
    };
  }
]
