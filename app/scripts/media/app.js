'use strict';

require('angular');

angular.module('Liberator.Media',[])
  
  .directive("mediaWidget", require("./media-widget.js"))
  .directive("fileModel", require("./upload-widget-directive.js"))
  .service('MediaService', require('./service.js'));
