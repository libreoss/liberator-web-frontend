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

        function getUser(user_id) {
            return $http.get(API_URL + 'users/' + user_id);
        }

        return {
            getUsers : getUsers,
            getUser  : getUser,
        };
    }
];
