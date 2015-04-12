'use strict';

module.exports = [
  '$http',
  '$window',
  'API_URL',

  function articles($http, $window, API_URL) {

      function getArticles() {
          return $http.get(API_URL+'articles/');
      }

      return {
        getArticles: getArticles
      };
  }
];
