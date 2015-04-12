'use strict'

module.exports = [
    '$scope',
    '$window',
    'API_URL',
    'articles',
    'users',

    function archiveController($scope, $window, API_URL, articles, users) {
        articles.getArticles().then( function(response) {
            $scope.articles = response["data"];
        });

        users.getUsers().then( function(response) {
            $scope.users =  response["data"];
        });

    }
];
