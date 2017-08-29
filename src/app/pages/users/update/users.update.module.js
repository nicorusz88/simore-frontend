/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users.update', [])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('users.update', {
          url: '/update/:userId',
          templateUrl: 'app/pages/users/update/update.html',
          controller: 'UsersUpdateCtrl',
          controllerAs: "vm",
        });
  }

})();
