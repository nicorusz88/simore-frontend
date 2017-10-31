/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.charts', [
      'SimoreFrontend.pages.charts.amCharts',
      'SimoreFrontend.pages.charts.chartJs',
      'SimoreFrontend.pages.charts.chartist',
      'SimoreFrontend.pages.charts.morris'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts', {
          url: '/charts',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Charts',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();
