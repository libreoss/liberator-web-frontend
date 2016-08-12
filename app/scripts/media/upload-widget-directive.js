'use strict'

module.exports = [
  'MediaService',
  '$parse',
  function (MediaService, $parse)
  {
    return {
      require: "^mediaWidget",
      link: function(scope, elem, attrs, controllerInstance) 
      {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        elem.bind('change', function(){
          scope.$apply(function(){
            modelSetter(scope, elem[0].files[0]);
          });
        });
      },
    };
  }
]
