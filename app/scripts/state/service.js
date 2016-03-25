'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  function StateService($http, API_URL, $q) {
    
    function listStates() 
    {
      return $http.get(API_URL + "states/");
    }
    return {
      listStates: listStates,
    };

}]
