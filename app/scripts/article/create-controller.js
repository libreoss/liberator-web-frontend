'use strict'

module.exports = [
  '$scope',
  'ArticleService',
  '$state',
  '$stateParams',
  'SectionService',
  'UserService',
  'IssueService',

  function ArticleCreateController($scope, ArticleService, $state, $stateParams, SectionService, UserService, IssueService) {
    $scope.article = {}; 
    $scope.article.authors = [];
    $scope.article.issues = [];
    $scope.article.section = "";
    
    $scope.sections = [];
    $scope.authors = [];
    $scope.issues = [];

    SectionService.listSections().then(function (response) 
    {
      $scope.sections = response.data;
    });
    
    UserService.listUsers().then(function (response) 
    {
      $scope.authors = response.data;
    });
    
    IssueService.listIssues().then(function (response) 
    {
      $scope.issues = response.data;
    });

    $scope.addAuthor = function(author) 
    {
      author.added = true;
      $scope.article.authors.push(author.id);
    };

    $scope.removeAuthor = function(author) 
    {
      author.added = false;
      for (var i = 0; i<$scope.article.authors.length; i++) 
      {
        if ($scope.article.authors[i] == author.id) 
        {
          delete $scope.article.authors[i];
        }
      }
    };

    $scope.addIssue = function(issue) 
    {
      issue.added = true;
      $scope.article.issues.push(issue.id);
    };

    $scope.removeIssue = function(issue) 
    {
      issue.added = false;
      for (var i = 0; i<$scope.article.issues.length; i++) 
      {
        if ($scope.article.issues[i] == issue.id) 
        {
          delete $scope.article.issues[i];
        }
      }
    };

    $scope.setSection = function(section) 
    {
      $scope.article.section = section.id;
    }

    $scope.save = function() 
    {
      ArticleService.createArticle($scope.article)
      .then(function (response) 
      {
        $state.go("home");
      });
    }

  }
];

