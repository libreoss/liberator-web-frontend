'use strict';

require('angular');

angular.module('Liberator.User',[
  require('angular-ui-router'), // optional dependencies for module
])
  
  .service('UserService', require('./service.js'))
  .controller("UserListController", require("./list-controller.js"))
  .controller("UserCreateController", require("./create-controller.js"))
  .config(require("./config"));

