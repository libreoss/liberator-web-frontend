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

        $scope.getAuthorsInfo = function( author_ids ) {
            var result = [];

            for(var i = 0; i < author_ids.length; i++)
            {
                for(var j = 0; j < $scope.users.length; j++)
                {
                    if($scope.users[j].id === author_ids[i])
                    {
                        result.push($scope.users[j]);
                        break;
                    }
                }
            }

            return result;
        }

    }
];
