
'use strict'

module.exports = [
  'MediaService',
  '$state',
  function (MediaService, $state) {
    return {
      scope: {
        article: "="
      },
      restrict: 'E',
      controller: function($scope, $compile, $http) {
        $scope.uploadFile = function(){
          var file = $scope.myFile;
          console.log("Uploading article " + $scope.article.id);
          MediaService.upload(file, $scope.article).then(function (response) 
          {
            $state.go("home");
          });
        };
      },
      templateUrl: "scripts/media/views/widget.html"
    };
  }
];
