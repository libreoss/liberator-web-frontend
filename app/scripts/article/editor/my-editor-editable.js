'use strict'

module.exports = [
  "$document",
function ($document) 
{
  return {
    scope: {
      content: "="
    },
    require: "^myEditorArea",
    link: function(scope, elem, attrs, controllerInstance) 
    {
      controllerInstance.applyAction = function(action) 
      {
        $document[0].execCommand(action);
      }
    },
    restrict: "E",
    templateUrl: "scripts/article/editor/templates/editable.html",
  };
}
]
