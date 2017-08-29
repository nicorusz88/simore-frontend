/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users.create', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('users.create', {
          url: '/create',
          templateUrl: 'app/pages/users/create/create.html',
          controller: 'UsersCreateCtrl',
          controllerAs: "vm",
          title: 'Nuevo usuario',
          sidebarMeta: {
            icon: 'ion-person-add',
            order: 220,
          },
        });
  }

})();
