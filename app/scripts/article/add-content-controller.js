'use strict'

module.exports = [
  '$scope',
  '$state',
  '$stateParams',
  'ArticleService',
  'LanguageService',
  'StateService',

  function AddContentController($scope, $state, $stateParams, ArticleService, LanguageService, StateService) {
    
    $scope.current_state = {};
    
    ArticleService.getContents($stateParams.articleId).then(
      function (response) 
      {
        $scope.content = {
          article: $stateParams.articleId,
          language: $stateParams.languageId,
          title: "",
          text: "",
          state: 1,
        }; 
        for (var i = 0; i<response.data.length; i++) 
        {
          if (response.data[i].language == $stateParams.languageId) 
          {
            $scope.content = response.data[i];
          }
        }
      }
    );
    
    // get all available states to fill the state list in dropdown menu
    $scope.states = []
    StateService.listStates().then(function (response) 
    {
      $scope.states = response.data;
      
      // find our current state and set current_state variable
      for (var i=0; i<response.data.length; i++) 
      {
        if ($scope.content.state == response.data[i].id) 
        {
          $scope.current_state = response.data[i];
        }
      }
    });

    $scope.changeState = function (newstate) 
    {
      $scope.current_state = newstate; 
      $scope.content.state = newstate.id;
    };

    $scope.save = function() 
    {
      ArticleService.addContent($scope.content)
      .then(function (response) 
      {
        $state.go("article-read", {
          articleId: $scope.content.article,
        });
      });
    }

  }
];

