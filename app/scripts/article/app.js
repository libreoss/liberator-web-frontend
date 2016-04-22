'use strict';

require('angular');

angular.module('Liberator.Article',[
  require('angular-ui-router'), // optional dependencies for module
  require('angular-contenteditable'),
  //require('angular-messages')
  'Liberator.Section',
  'Liberator.User',
  'Liberator.Issue',
])

  .config(require('./config'))

  .controller('ArticleListController', require('./list-controller.js'))
  .controller('ArticleReadController', require('./read-controller.js'))
  .controller('ArticleCreateController', require('./create-controller.js'))
  .controller('AddContentController', require('./add-content-controller.js'))

  .service('ArticleService', require('./service.js'))

  .directive("myEditorArea", require("./editor/my-editor-area.js"))
  .directive("myEditorAction", require("./editor/my-editor-action.js"))
  .directive("myEditorEditable", require("./editor/my-editor-editable.js"))

  .directive("myArticleItem", require("./directive.js"));
