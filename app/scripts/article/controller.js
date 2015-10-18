'use strict';

module.exports = [
    '$scope',
    'articles',
    'titles',
    'users',
    'utils',
    '$stateParams',

    function articleController($scope, articles, titles, users, utils, $stateParams) {
        articles.getArticle($stateParams["id"])
        .then(function(result) {
            $scope.article = result["data"];
        });

        users.getUsers().then(function(result) {
            $scope.users = result["data"];
        });

        $scope.getAuthorsInfo = utils.getAuthorsInfo;
    }
];
