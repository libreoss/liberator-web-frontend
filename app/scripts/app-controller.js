'use strict';

module.exports = [
  '$scope', '$http', 'API_URL',
  function AppController($scope, $http, API_URL) {
    $scope.greeting = 'Hello from scope';

    $http.get(API_URL+'article-states/')
    .success( function(data) {
        $scope.states = data;
    })
    .error( function(data) {
        $scope.states = 'blah blah';
    });


  } ];
