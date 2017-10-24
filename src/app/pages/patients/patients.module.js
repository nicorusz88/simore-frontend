/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients', [
      'ui.select',
      'ngSanitize',
      'SimoreFrontend.pages.patients.create',
      'SimoreFrontend.pages.patients.update',
      'SimoreFrontend.pages.patients.index',
      'SimoreFrontend.pages.patients.treatment',
      'SimoreFrontend.pages.patients.dashboard',
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('patients', {
        url: '/patients',
        template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        abstract: true,
        title: 'Pacientes',
        sidebarMeta: {
          icon: 'ion-medkit',
          order: 200,
          roles: ['PROFESSIONAL']
        },
      });
  }

})();