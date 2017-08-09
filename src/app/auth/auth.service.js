/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.auth')
    .service('principal', principal);

  /** @ngInject */
  function principal($resource, $http, $cookies, config) {
    var vm = this;
    vm.user = null;

    var service = {
      getResource: getResource,
      isLoggedIn: isLoggedIn,
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

    return service;
  }


  

})();