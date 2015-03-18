'use strict'

module.exports = [
  '$q',
  '$injector',

  function($q, $injector){
    return{
      'responseError' : function(response){
        if ((response.status === 401) || (response.status === 403)){
          $injector.get('$state').go('auth.login');
          $injector.get('loginService').logOut();
        }
        return $q.reject(response);
      }
    };
  }
];
