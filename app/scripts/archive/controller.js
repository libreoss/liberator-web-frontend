'use strict'

module.exports = [
    '$scope',
    '$window',
    'articles',
    'users',
    'states',
    'utils',

    function archiveController($scope, $window, articles, users, states, utils) {
        articles.getArticles().then( function(response) {
            $scope.articles = response["data"];
        });

        users.getUsers().then( function(response) {
            $scope.users =  response["data"];

        });

        states.getStates().then( function(response) {
            $scope.states = response["data"];
        });

        $scope.getAuthorsInfo = utils.getAuthorsInfo;
        $scope.getStateInfo  = utils.getStateInfo;

    }
];
