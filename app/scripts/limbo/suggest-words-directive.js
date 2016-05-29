
'use strict'

module.exports = [
  'LimboService',
  function (LimboService)
  {
    return {
      scope: {
        word: "@",
        username: "@",
      },
      link: function(scope, elem, attrs) 
      {
      },
      controller: function ($scope, $compile)
      {
        $scope.popup = false; 
        $scope.suggestions = [];
        $scope.donwloaded = false; 
        $scope.add = function() 
        {
          LimboService.init($scope.username);
          LimboService.addWords([$scope.word]).then(
            function (response) 
            {
            }
          );
        };

        $scope.toggle_popup = function() 
        {
          if ($scope.popup) $scope.popup = false; 
          else {
            LimboService.init($scope.username);
            LimboService.check([$scope.word]).then(function (response) 
            {
              if (!$scope.downloaded) {
                $scope.suggestions = response.data["words"][0]["suggestions"];
                console.log($scope.suggestions);
                $scope.downloaded = true;
              }
            });
            $scope.popup = true;
          }
        };

      },
      restrict: "E",
      templateUrl: "scripts/limbo/views/suggest_words.html",
    };
  }
]
