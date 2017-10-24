/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .directive('heartRateWidget', heartRateWidget);

  /** @ngInject */
  function heartRateWidget() {
    return {
      restrict: 'E',
      controller: 'HeartRateWidgetCtrl',
      controllerAs: 'vm',
      scope: {
        patient: '='
      },
      templateUrl: 'app/pages/patients/dashboard/heartRateWidget/heartRateWidget.html'
    };
  }
})();