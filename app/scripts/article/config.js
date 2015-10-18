'use strict';

module.exports = [
    '$stateProvider',
    function articleConfig($stateProvider) {

        $stateProvider
          .state('article', {
              url          : "/article/:id",
              templateUrl  : 'scripts/article/views/article.html',
              controller   : 'articleController'
          });
    }
];
