'use strict'

module.exports = [
    '$scope',
    '$http',
    'articles',
    'users',
    'titles',
    'API_URL',

    function newArticleController($scope, $http, articles, users, titles, API_URL) {
        users.getUsers().then( function(result) {
            $scope.users = result["data"];
        });


        $scope.create_new_article = function(title, author) {
            articles.createNewArticle(author)
            .then(function(result) {

                $scope.article_result = result["data"];

                titles.newTitle(title, result["data"]["id"])
                .then(function(result) {
                    $scope.title_result = result["data"];
                }
                );
            });
        }
    }
];
