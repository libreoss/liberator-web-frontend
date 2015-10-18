'use strict';

module.exports = [
    '$scope',
    'articles',
    'users',
    'utils',
    '$stateParams',

    function userController($scope, articles, users, utils, $stateParams) {
        users.getUser($stateParams["id"])
        .then( function(result) {
            $scope.user = result["data"];
        });
    }
];
