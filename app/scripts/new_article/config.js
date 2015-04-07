'use strict'

module.exports = [
    '$stateProvider',
    function newArticleConfig($stateProvider) {

        $stateProvider
            .state('newArticle', {
                url : '/new_article',
                templateUrl: 'scripts/new_article/views/new-article.html',
                controller: 'newArticleController'
            });
    }
];
