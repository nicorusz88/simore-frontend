/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments', [
    'SimoreFrontend.pages.treatments.create',
    //'SimoreFrontend.pages.treatmentTemplates.update',
    //'SimoreFrontend.pages.treatmentTemplates.index'
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('treatments', {
          url: '/treatments',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Tratamientos',
          sidebarMeta: {
            icon: 'ion-clipboard',
            order: 300,
            roles: ['ADMINISTRATOR', 'PROFESSIONAL']
          },
        });
  }

})();
