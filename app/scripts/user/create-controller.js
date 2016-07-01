'use strict'

module.exports = [
  '$scope',
  'UserService',
  '$state',
  '$stateParams',

  function UserCreateController($scope, UserService, $state, $stateParams) {
    
    $scope.user = 
    {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      groups: [],
      user_ermissions: [],
      is_active: true
    };

    $scope.save = function() 
    {
      UserService.createUser($scope.user)
      .then(function (response) 
      {
        $state.go("home");
      });
    }

  }
];

