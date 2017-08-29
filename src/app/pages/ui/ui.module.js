/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.ui', [
    'SimoreFrontend.pages.ui.typography',
    'SimoreFrontend.pages.ui.buttons',
    'SimoreFrontend.pages.ui.icons',
    'SimoreFrontend.pages.ui.modals',
    'SimoreFrontend.pages.ui.grid',
    'SimoreFrontend.pages.ui.alerts',
    'SimoreFrontend.pages.ui.progressBars',
    'SimoreFrontend.pages.ui.notifications',
    'SimoreFrontend.pages.ui.tabs',
    'SimoreFrontend.pages.ui.slider',
    'SimoreFrontend.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
