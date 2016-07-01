'use strict'

module.exports = [
  '$stateProvider',
  function UserConfig($stateProvider) {
    $stateProvider
      .state('user-list', {
	      url : '/users',
	      templateUrl: 'scripts/user/views/list.html',
      	controller: 'UserListController'
      })
      
      .state('user-create', {
	      url: '/users-new',
      	controller: 'UserCreateController',
	      templateUrl: 'scripts/user/views/create.html'
      });
  }
];
