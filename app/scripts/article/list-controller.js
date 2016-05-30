'use strict'

module.exports = [
  '$scope',
  'ArticleService',
  '$state',

  function ArticleListController($scope, ArticleService, $state) {
    
    function listArticles() 
    {
      $scope.selected_section = null;
      $scope.selected_issue = null;

      $scope.all = [];
      $scope.articles = [];
      ArticleService.listArticles()
        .then(
          function (response) 
          {
            $scope.all = response.data;
          }
      );
      function filter(newval, oldval) 
      {
        $scope.articles = [];
        for (var i =0; i<$scope.all.length; i++) 
        {
          if (
            ($scope.selected_section == null || $scope.selected_section.id == $scope.all[i].section) 
            && ($scope.selected_issue == null || $scope.selected_issue.id == $scope.all[i].issue) 
          )
          {
            $scope.articles.push($scope.all[i]);
          }
        }
      }
      $scope.$watch("selected_section", filter);
      $scope.$watch("selected_issue", filter)
    }

    listArticles();
  }
];

