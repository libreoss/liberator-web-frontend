'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  function LanguageService($http, API_URL, $q) {
    
    function listLanguages() 
    {
      return $http.get(API_URL + "languages/");
    }
    return {
      listLanguages: listLanguages,
    };

}]
