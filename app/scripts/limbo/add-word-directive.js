
'use strict'

module.exports = [
  'LimboService',
  function addWordDirective(LimboService)
  {
    return {
      scope: {
        username: "@",
      },
      link: function(scope, elem, attrs) 
      {
      },
      controller: function ($scope, $compile)
      {
        $scope.words = [];
        $scope.word = "";
        $scope.add = function() 
        {
          $scope.words.push($scope.word);
          $scope.word = "";
        };

        $scope.submit = function() 
        {
          LimboService.init($scope.username);
          LimboService.addWords($scope.words).then(
            function (response) 
            {
              $scope.words = [];
            }
          );
        };

      },
      restrict: "E",
      templateUrl: "scripts/limbo/views/add_word.html",
    };
  }
]
