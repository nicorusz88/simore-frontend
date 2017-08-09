/**
 * @author SimoreTeam
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.auth')
    .controller('authCtrl', authCtrl);

  /** @ngInject */
  function authCtrl($state, $cookies, $http, $rootScope, principal) {
    var vm = this;

    vm.login = login;
    vm.entry = {};
    vm.principalResource = principal.getResource();

    function login(){
      vm.principalResource.authenticate($.param(vm.entry), function(user){
        $rootScope.user = user;
        $http.defaults.headers.common['x-auth-token'] = user.token;
        $cookies.put('user', JSON.stringify(user));
        $state.go('dashboard');
      });

    }

  }


})();