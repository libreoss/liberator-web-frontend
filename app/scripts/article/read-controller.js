'use strict'

module.exports = [
  '$scope',
  'ArticleService',
  '$state',
  '$stateParams',
  'LanguageService',
  'UserService',

  function ArticleReadController($scope, ArticleService, $state, $stateParams, LanguageService, UserService) {
    
    $scope.content = {};
    $scope.article = {};
    $scope.authors = [];

    ArticleService.readArticle($stateParams.articleId).then(
      function (response) 
      {
        $scope.article = response.data;
        angular.forEach($scope.article.authors, function (author, key)
        {
          UserService.readUser(author).then(function (response) 
          {
            console.log(response.data);
            $scope.authors.push(response.data);
          });
        });
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

