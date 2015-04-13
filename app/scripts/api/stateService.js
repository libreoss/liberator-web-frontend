'use strict';

module.exports = [
    '$http',
    'API_URL',

    function stateService($http, API_URL) {
        function getStates() {
            return $http.get(API_URL + 'article-states/');
        }

        return {
            getStates : getStates,
        };
    }
];
