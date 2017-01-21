'use strict'

module.exports = [
  '$scope',
  'UserService',
  '$state',

  function UserListController($scope, UserService, $state) {
    
    UserService.listUsers()
      .then(
        function (response) 
        {
          $scope.users = response.data;
        }
    );
  }
];

