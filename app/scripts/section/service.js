'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  function SectionService($http, API_URL, $q) {
    
    function listSections() 
    {
      return $http.get(API_URL + "sections/");
    }
    return {
      listSections: listSections,
    };

}]
