'use strict'

module.exports = [
  'UserService',
  function (UserService)
  {
    return {
      require: "^articleComments",
      scope: {
        comment: "="
      },
      link: function(scope, elem, attrs, controllerInstance) 
      {
      },

      controller: function($scope, $compile, $http)
      {
        UserService.readUser($scope.comment.author).then(function (response)
        {
          $scope.user = response.data;
        });
      },
      templateUrl: "scripts/comment/views/article-comment.html",
    };
  }
]
