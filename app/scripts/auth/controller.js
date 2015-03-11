'use strict'

module.exports = [
  '$scope',
  'loginService',

  function loginController($scope, loginService) {

    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function(user) {
      loginService.logIn(user)
      .then(
        function() {
          console.log('Success');
        },
        function(){
          console.log('Success');
        }
      );
    };
  }
];
