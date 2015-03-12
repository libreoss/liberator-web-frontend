'use strict'

module.exports = [
  '$scope',
  'loginService',
  '$state',

  function loginController($scope, loginService, $state) {

    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function() {
      // perform a login using service
      loginService.logIn($scope.user)
      .then(
        function loginSuccess() {
          // if login is sucessful, redirect to home
          $state.go('home');
        }
      );
    };
  }
];
