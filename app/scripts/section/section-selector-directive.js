'use strict'

module.exports = [
  'SectionService',
  function (SectionService)
  {
    return {
      scope: {
        selected: "="
      },
      link: function(scope, elem, attrs) 
      {
      },
      controller: function ($scope, $compile) 
      {
        $scope.options = [];
        $scope.options.push({
          name: "Without section",
          id: null
        });
        SectionService.listSections().then(function (response) 
        {
          var res = response.data;
          for (var i = 0; i<res.length; i++) 
          {
            $scope.options.push({
              name: res[i].name,
              id: res[i].id
            });
          }
        });

        $scope.selected = null;

        $scope.select = function(option) 
        {
          $scope.selected = option;
        };
      },

      restrict: "E",
      templateUrl: "scripts/section/views/selector.html",
    };
  }
]
