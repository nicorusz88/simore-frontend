/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users', [
    'SimoreFrontend.pages.users.create',
    'SimoreFrontend.pages.users.update',
    'SimoreFrontend.pages.users.index',
    'SimoreFrontend.pages.users.fitbit',
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('users', {
          url: '/users',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Usuarios',
          sidebarMeta: {
            icon: 'ion-person',
            order: 200,
            roles: ['ADMINISTRATOR', 'PROFESSIONAL']
          }
        });
  }

})();
