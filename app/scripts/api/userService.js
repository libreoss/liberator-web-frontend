'use strict'

module.exports = [
    '$http',
    'API_URL',
    '$q',
    '$window',

    function userService($http, API_URL, $q, $window) {
        function getUsers() {
            return $http.get(API_URL + 'users/');
        }

        return {
            getUsers : getUsers,
        };
    }
];
