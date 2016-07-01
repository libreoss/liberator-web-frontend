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
    function readUser(userId) 
    {
      return $http.get(API_URL + "users/" + userId + "/");
    }

    function createUser(user) 
    {
      return $http.post(API_URL + "users/", user);
    }

    return {
      listUsers: listUsers,
      readUser: readUser,
      createUser: createUser,
    };

}]
