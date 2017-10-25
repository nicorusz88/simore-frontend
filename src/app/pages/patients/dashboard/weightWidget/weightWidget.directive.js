/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .directive('weightWidget', weightWidget);

  /** @ngInject */
  function weightWidget() {
    return {
      restrict: 'E',
      controller: 'WeightWidgetCtrl',
      controllerAs: 'vm',
      scope: {
        patient: '='
      },
      templateUrl: 'app/pages/patients/dashboard/weightWidget/weightWidget.html'
    };
  }
})();