/**
 * @author SimoreTeam
 * created on 12/22/15
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.ui.slider', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.slider', {
          url: '/slider',
          templateUrl: 'app/pages/ui/slider/slider.html',
          title: 'Sliders',
          sidebarMeta: {
            order: 1000,
          },
        });
  }

})();
