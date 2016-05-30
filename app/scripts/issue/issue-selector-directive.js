'use strict'

module.exports = [
  'IssueService',
  function (IssueService)
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
          name: "Without issue",
          id: null
        });
        IssueService.listIssues().then(function (response) 
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
      templateUrl: "scripts/issue/views/selector.html",
    };
  }
]
