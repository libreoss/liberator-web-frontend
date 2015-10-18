'use strict'

module.exports = [
    '$http',
    'API_URL',

    function languageService($http, API_URL) {
        function getLanguages() {
            return $http.get(API_URL)
        }
    }
];
