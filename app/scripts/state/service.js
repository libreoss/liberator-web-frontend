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
    
    function readState(stateId) 
    {
      return $http.get(API_URL + "states/" + stateId + "/");
    }
    return {
      listStates: listStates,
      readState: readState,
    };

}]
