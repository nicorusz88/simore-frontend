/**
 * @author SimoreTeam
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.auth')
    .controller('authCtrl', authCtrl);

  /** @ngInject */
  function authCtrl($state, $cookies, principal) {
    var vm = this;

    vm.login = login;
    vm.entry = {};
    vm.principalResource = principal.getResource();

    function login(){
      vm.principalResource.authenticate(vm.entry, function(){
        $rootScope.user = user;
        $http.defaults.headers.common[ xAuthTokenHeaderName ] = user.token;
        $cookies.put('user', user);
        $state.go('dashboard');
      });

    }

  }


})();