'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  function CommentsService($http, API_URL, $q) {
    
    function postComment(comment) 
    {
      return $http.post(API_URL + "comments/", comment);
    }
    return {
      postComment: postComment,
    };

}]
