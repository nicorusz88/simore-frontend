/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.auth', [
    'ui.router'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('login', {
          url: '/login',
          controller: 'authCtrl',
          controllerAs: 'vm',
          templateUrl: 'app/auth/login.html',
        });
  }

})();