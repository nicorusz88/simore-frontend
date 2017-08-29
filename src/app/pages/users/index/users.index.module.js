/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users.index', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('users.index', {
          url: '/index',
          templateUrl: 'app/pages/users/index/index.html',
          controller: 'UsersIndexCtrl',
          controllerAs: 'vm',
          title: 'Listado usuarios',
          sidebarMeta: {
            icon: 'ion-person-stalker',
            order: 210,
          },
        });
  }

})();
