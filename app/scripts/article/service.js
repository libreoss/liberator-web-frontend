'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  '$window',
  function ArticleService($http, API_URL, $q, $window) {
    
    function deleteArticle(articleId) 
    {
      return $http.delete(API_URL + "articles/" + articleId + "/");
    }


    function readArticle(articleId) 
    {
      return $http.get(API_URL + "articles/" + articleId + "/"); 
    }

    function listArticles() 
    {
      return $http.get(API_URL + "articles/");
    }

    function getContents(articleId) 
    {
      return $http.get(API_URL + "articles/" + articleId + "/languages/latest/");
    }

    return {
      deleteArticle: deleteArticle,
      readArticle: readArticle,
      listArticles: listArticles,
      getContents: getContents,
    };

}]
