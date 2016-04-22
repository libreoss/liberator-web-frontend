'use strict'

module.exports = function () 
{
  return {
    scope: {
      command: "@",
      title: "@"
    },
    require: "^myEditorArea",
    link: function(scope, elem, attrs, controllerInstance) 
    {
      elem.on("click", function() 
      {
        controllerInstance.applyAction(scope.command);
      });
    },
    restrict: "E",
    templateUrl: "scripts/article/editor/templates/action.html"
  };
}
