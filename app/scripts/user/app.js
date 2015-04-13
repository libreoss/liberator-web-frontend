'use strict';

require('angular');

angular.module('Liberator.user', [

])
    .config(require('./config'))
    .controller('userController', require('./controller.js'));
