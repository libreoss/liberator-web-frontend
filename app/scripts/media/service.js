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
    return {
      upload: upload,
    };

}]
