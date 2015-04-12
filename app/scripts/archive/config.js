'use strict'

module.exports = [
    '$stateProvider',
    '$resourceProvider',

    function archiveConfig($stateProvider, $resourceProvider) {

        $stateProvider
            .state('archive', {
                url : '/archive',
                templateUrl: 'scripts/archive/views/archive.html',
                controller: 'archiveController'
            });

        $resourceProvider.defaults.stripTrailingSlashes = false;
    }
];
