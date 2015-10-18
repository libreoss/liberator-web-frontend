'use strict';

module.exports = [
    '$stateProvider',
    '$resourceProvider',

    function userConfig($stateProvider, $resourceProvider) {

        $stateProvider
          .state('user', {
              url : '/user/:id',
              templateUrl : 'scripts/user/views/user.html',
              controller : 'userController'
          });

          $resourceProvider.defaults.stripTrailingSlashes = false;
    }
];
