'use strict'

module.exports = [
  '$scope',
  'ArticleService',
  '$state',

  function ArticleListController($scope, ArticleService, $state) {
    
    function listArticles() 
    {
      ArticleService.listArticles()
        .then(
          function (response) 
          {
            $scope.articles = response.data;
          }
        );
    }

    listArticles();
  }
];

