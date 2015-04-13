'use strict';

module.exports = [
  '$http',
  '$window',
  'API_URL',

  function articles($http, $window, API_URL) {

      function getArticles() {
          return $http.get(API_URL+'articles/');
      }

      function createNewArticle(author) {
          return $http.post(API_URL + 'articles/', {
                    authors  : [ parseInt(author)],
                    state    : 1,
                    section  : null,
                    issue    : null,
                    titles   : [],
                    contents : []
                    });
      }

      return {
        getArticles      : getArticles,
        createNewArticle : createNewArticle,
      };
  }
];
