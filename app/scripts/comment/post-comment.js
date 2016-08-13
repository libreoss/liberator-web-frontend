'use strict'

module.exports = [
  'CommentService',
  '$state',
  function (CommentService, $state)
  {
    return {
      require: "^articleComments",
      scope: {
        article: "=",
      },
      link: function(scope, elem, attrs, controllerInstance) 
      {
      },

      controller: function ($scope, $compile, $http) 
      {
        $scope.comment = {
          text: ""
        };
        $scope.submit = function () 
        {
          $scope.comment.article = $scope.article.id;
          CommentService.postComment($scope.comment).then(function (response) 
          {
            $state.go("home");
          });
        }
      },
      templateUrl: "scripts/comment/views/post-comment.html",

    };
  }
]
