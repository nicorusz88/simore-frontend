/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.auth')
    .service('Auth', Auth);

  /** @ngInject */
  function Auth($resource, $http, $cookies, config) {
    var vm = this;
    vm.user = null;

    var service = {
      getResource: getResource,
      isLoggedIn: isLoggedIn,
      checkRoles: checkRoles,
      checkAnyRoles: checkAnyRoles,
      logout: logout
    };

    function getResource(){
      return $resource(config.apiUrl + ':' + config.apiPort + '/:action', {},
         {
           authenticate: {
             method: 'POST',
             params: {'action' : 'authenticate'},
             headers : {'Content-Type': 'application/x-www-form-urlencoded'}
           }
         }
       );
    }

    function logout(){
      $cookies.remove('user');
    }

    function isLoggedIn(){
      var user = $cookies.get('user');
      if (user != undefined){
        vm.user = JSON.parse(user);
        $http.defaults.headers.common['x-auth-token'] = vm.user.token;
        return vm.user;

      }else{
        return false;
      }
    }

    function checkRoles(roles) {
      if (isLoggedIn()){
        var userRoles = Object.keys(vm.user.roles);
        var result = userRoles.filter(function(n) {
            return roles.indexOf(n) != -1;
        });
        return result.length == roles.length;
      }else{
        return false;
      }
    }

    function checkAnyRoles(roles) {
      if (isLoggedIn()){
        var userRoles = Object.keys(vm.user.roles);
        var result = userRoles.filter(function(n) {
            return roles.indexOf(n) != -1;
        });
        return result.length > 0;
      }else{
        return false;
      }
    }

    return service;
  }


  

})();