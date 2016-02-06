'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  function IssueService($http, API_URL, $q) {
    
    function listIssues() 
    {
      return $http.get(API_URL + "issues/");
    }
    return {
      listIssues: listIssues,
    };

}]
