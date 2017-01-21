'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  function MediaService($http, API_URL, $q) {
    
    function upload(file, article) 
    {
      var fd = new FormData();
      fd.append('file', file);
      var uploadUrl = API_URL + "upload/" + article.id + "/";
      return $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      });
    }
    function getMedia(article) 
    {
      console.log("Getting media for " + article.id);
      return $http.get(API_URL + "articles/ " + article.id + "/media/");
    }
    return {
      upload: upload,
      getMedia: getMedia,
    };

}]
