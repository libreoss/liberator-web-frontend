'use strict';

module.exports = [
  '$scope',
  '$window',
  function AppController($scope, $window) {
    $scope.greeting = 'Hello from scope';
    $scope.username = "not logged in";
  } ];
