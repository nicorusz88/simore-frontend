/**
 * @author k.danovsky
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.components', [
    'SimoreFrontend.pages.components.mail',
    'SimoreFrontend.pages.components.timeline',
    'SimoreFrontend.pages.components.tree',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Components',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();
