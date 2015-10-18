'use strict'

module.exports = [
    '$http',
    'API_URL',

    function titleService($http, API_URL) {
        function getTitles() {
            return $http.get(API_URL + 'titles/');
        }

        function newTitle(title, article_id) {
            return $http.post(API_URL + 'titles/', {
                article  : parseInt(article_id),
                title    : title,
                language : 2,
                revision : null,
                revision_author : null
            });
        }
        return {
            getTitles : getTitles,
            newTitle  : newTitle,
        };
    }
];
