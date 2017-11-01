/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .directive('distanceWidget', distanceWidget);

  /** @ngInject */
  function distanceWidget() {
    return {
      restrict: 'E',
      controller: 'DistanceWidgetCtrl',
      controllerAs: 'vm',
      scope: {
        patient: '='
      },
      templateUrl: 'app/pages/patients/dashboard/distanceWidget/distanceWidget.html'
    };
  }
})();