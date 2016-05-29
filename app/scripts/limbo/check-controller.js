
'use strict'

module.exports = [
  '$scope',
  '$state',
  '$stateParams',
  'ArticleService',

  function LimboCheckController($scope, $state, $stateParams, ArticleService) {
    $scope.content;

    ArticleService.getContents($stateParams.articleId).then(
      function (response) 
      {
        // find content for selected language 
        for (var i = 0; i<response.data.length; i++) 
        {
          if (response.data[i].language == $stateParams.languageId) 
          {
            $scope.content = response.data[i];
            $scope.words = $scope.content.text.split(" ");
          }
        }
      }
    );
    
  }
];

