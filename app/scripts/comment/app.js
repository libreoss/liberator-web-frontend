'use strict';

require('angular');

angular.module('Liberator.Comment',[])
  
  .directive("articleComments", require("./article-comments.js"))
  .directive("articleComment", require("./article-comment.js"))
  .directive("postComment", require("./post-comment.js"))
  .service('CommentService', require('./service.js'));
