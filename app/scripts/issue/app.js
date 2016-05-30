'use strict';

require('angular');

angular.module('Liberator.Issue',[])
  
  .directive("issueSelector", require("./issue-selector-directive.js"))
  .service('IssueService', require('./service.js'));
