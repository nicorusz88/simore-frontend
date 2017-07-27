/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.auth')
    .service('principal', principal);

  /** @ngInject */
  function principal($resource, $http, $cookies) {
    var vm = this;
    vm.user = null;

    var service = {
      getResource: getResource,
      isLoggedIn: isLoggedIn,
    };

    function getResource(){
      return $resource('http://192.168.1.7:8088/:action', {},
         {
           authenticate: {
             method: 'POST',
             params: {'action' : 'authenticate'},
             headers : {'Content-Type': 'application/x-www-form-urlencoded'}
           }
         }
       );
    }

    function isLoggedIn(){
      var user = $cookies.get('user');
      if (user != undefined){
        
        vm.user = user;
        $http.defaults.headers.common[xAuthTokenHeaderName] = vm.user.token;
        return vm.user;

      }else{

        return false;

      }
    }

    return service;
  }


  

})();