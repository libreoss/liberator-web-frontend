
'use strict'

module.exports = [
  'MediaService',
  '$state',
  'API_URL',
  function (MediaService, $state, API_URL) {
    return {
      scope: {
        article: "="
      },
      restrict: 'E',
      controller: function($scope, $compile, $http) {
        
        function retrieve(article) 
        {
          MediaService.getMedia(article).then(function (response) 
          {
            $scope.media = [];
            var row = [];
            for (var i = 0; i<response.data.length; i++) 
            {
              var item = response.data[i];
              item.url = API_URL + item.url;
              row.push(item);
              if (i%4 == 3) {
                $scope.media.push(row);
                row = [];
              }
            }
            if (row.length > 0) $scope.media.push(row);
          });
        }
        $scope.$watch("article", function (nv, ov) 
        {
          retrieve(nv);
        });
        
        $scope.uploadFile = function(){
          var file = $scope.myFile;
          console.log("Uploading article " + $scope.article.id);
          MediaService.upload(file, $scope.article).then(function (response) 
          {
            retrieve($scope.article);
          });
        };
      },
      templateUrl: "scripts/media/views/widget.html"
    };
  }
];
