'use strict';

require('angular');

angular.module('Liberator.Section',[])
  
  .directive("sectionSelector", require("./section-selector-directive.js"))
  .service('SectionService', require('./service.js'));
