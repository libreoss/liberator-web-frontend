
'use strict'

module.exports = [
  function () {
    return {
      scope: {
        article: "=",
      },
      restrict: 'E',
      controller: function($scope, $compile, $http) {
        
      },
      templateUrl: "scripts/comment/views/article-comments.html"
    };
  }
];
