/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .directive('bloodPressureWidget', bloodPressureWidget);

  /** @ngInject */
  function bloodPressureWidget() {
    return {
      restrict: 'E',
      controller: 'BloodPressureWidgetCtrl',
      controllerAs: 'vm',
      scope: {
        patient: '='
      },
      templateUrl: 'app/pages/patients/dashboard/bloodPressureWidget/bloodPressureWidget.html'
    };
  }
})();