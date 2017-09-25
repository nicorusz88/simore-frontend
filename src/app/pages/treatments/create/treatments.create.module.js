/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments.create', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('treatments.create', {
          url: '/create',
          templateUrl: 'app/pages/treatments/create/create.html',
          controller: 'TreatmentsCreateCtrl',
          controllerAs: "vm",
          title: 'Nuevo tratamiento',
          sidebarMeta: {
            icon: 'ion-person-add',
            order: 310,
          },
        });
  }

})();
