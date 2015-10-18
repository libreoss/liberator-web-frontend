'use strict';

module.exports = [
    '$http',
    'API_URL',

    function stateService($http, API_URL) {
        function getStates() {
            return $http.get(API_URL + 'article-states/');
        }

        function getState(state_id) {
            return $http.get(API_URL + 'article-states/' + state_id);
        }

        return {
            getStates : getStates,
        };
    }
];
