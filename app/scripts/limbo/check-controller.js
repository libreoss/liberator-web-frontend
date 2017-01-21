
'use strict'

module.exports = [
  '$scope',
  '$state',
  '$stateParams',
  'ArticleService',
  'LimboService',

  function LimboCheckController($scope, $state, $stateParams, ArticleService, LimboService) {
    $scope.content;
    $scope.username = $stateParams.username;

    ArticleService.getContents($stateParams.articleId).then(
      function (response) 
      {
        // find content for selected language 
        for (var i = 0; i<response.data.length; i++) 
        {
          if (response.data[i].language == $stateParams.languageId) 
          {
            $scope.content = response.data[i];
            $scope.content.text = $scope.content.text.replace(/([<&])/g, " $1").replace(/([>;])/g,  "$1 ")
              .replace(/<\/?([ibp]|div)>/g, "")
              .replace(/<(code|pre)>.*<\/(code|pre)>/g, "")
              .replace(/&nbsp;/g, "");
            var words_ = $scope.content.text.split(" ");
            var words = [];
            // remove empty items 
            for (var i = 0; i<words_.length; i++) 
            {
              if (words_[i] != "") 
              {
                words.push(words_[i]);
              }
            }
            $scope.words = [];
            LimboService.init($scope.username);
            LimboService.check(words).then(function (response) 
            {
              var checked = response.data["words"];
              // add result to $scope.words 
              console.log(words);
              for (var i = 0; i<words.length; i++) 
              {
                // for eahc word find it in checked words and add to res 
                for (var j = 0; j<checked.length; j++) 
                {
                  if (words[i] == checked[j].word) 
                  {
                    $scope.words.push(checked[j]);
                  }
                }
              }
              console.log($scope.words);
            });
          }
        }
      }
    );
    
  }
];

