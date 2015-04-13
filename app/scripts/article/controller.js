'use strict';

module.exports = [
    '$scope',
    '$http',
    'articles',
    'titles',
    '$stateParams',

    function articleController($scope, $http, articles, titles, $stateParams) {
        articles.getArticle($stateParams["id"])
        .then(function(result) {
            $scope.article = result["data"];
        });
    }
];
