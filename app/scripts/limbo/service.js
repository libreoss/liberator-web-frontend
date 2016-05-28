'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  '$window',
  function LimboService($http, API_URL, $q, $window) {
    
    var dictname = "";
    
    function makeRequest(words) 
    {
      var request = {words: []};
      for (var i = 0; i<words.length; i++) 
      {
        request.words.push({word: words[i]});
      }

      return request;
    }

    function init(username) 
    {
      dictname = username.replace(".", "_");
    }

    function listWords() 
    {
      return $http.get(API_URL + "limbo/" + dictname + "/");
    }

    function addWords(words) 
    {
      return $http.put(API_URL + "limbo/" + dictname + "/", makeRequest(words));
    }

    function check(words) 
    {
      return $http.post(API_URL + "limbo/" + dictname + "/check/", makeRequest(words));
    }
    
    function ignore(words) 
    {
      return $http.post(API_URL + "limbo/" + dictname + "/ignore/", makeRequest(words));
    }

    return {
      init: init,
      listWords: listWords,
      addWords: addWords,
      check: check,
      ignore: ignore,
    };

}]
