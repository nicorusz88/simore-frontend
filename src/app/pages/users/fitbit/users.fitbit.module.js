/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users.fitbit', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('users.fitbit', {
          url: '/fitbit',
          templateUrl: 'app/pages/users/fitbit/index.html',
          controller: 'UsersFitbitCtrl',
          controllerAs: "vm",
          title: 'Fitbit'
        });
  }

})();
