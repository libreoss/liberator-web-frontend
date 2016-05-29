
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
        
        function decode_word(word) 
        {
          var tag = false; 
          var res = "";
          for (var i = 0; i<word.length; i++) 
          {
            if (word[i] == "<" && !tag) 
            {
              tag = true;
            }
            if (word[i] == ">" && tag) 
            {
              tag = false; 
            }
            if (!tag) {
              res = res + word[i];
            }
          }
          return res;
        }
        $scope.decode_word = decode_word;

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
            LimboService.check([decode_word($scope.word)]).then(function (response) 
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
