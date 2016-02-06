'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  function UserService($http, API_URL, $q) {
    
    function listUsers() 
    {
      return $http.get(API_URL + "users/");
    }
    return {
      listUsers: listUsers,
    };

}]
