/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.home', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/pages/home/home.html',
          title: 'Mis pacientes',
          controller: 'HomeCtrl',
          controllerAs: "vm",
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
            roles: ['PROFESSIONAL']
          },
        });
  }

})();
