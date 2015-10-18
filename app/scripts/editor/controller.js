'use strict'

module.exports = [
    '$scope',
    '$http',
    'API_URL',

    function newArticleController($scope, $http, API_URL) {
        $http.get(API_URL+'article-states/')
            .success(function(data) {
                $scope.states = data;
            })
            .error(function(data) {
                $scope.states = "error";
            });

        $http.get(API_URL+'articles/')
            .success(function(data) {
                $scope.articles = data;
            })
            .error(function(data) {
                $scope.articles = "error";
            });

        $http.get(API_URL+'users/')
            .success(function(data) {
                $scope.users = data;
            })
            .error(function(data) {
                $scope.users = "error";
            });

        $scope.create_new_article = function(title, author) {
            $http.post(API_URL+'articles/', {
                    authors:[parseInt(author)],
                    state:1,
                    section: null,
                    serie: null,
                    serie_part: null,
                    issue: null,
                    titles: [],
                    contents: []
                })
                .success(function(data) {
                    $scope.blah = "ok";
                })
                .error(function(data, status, headers, config) {
                    $scope.blah = "error";
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                });
        };
    }
];
