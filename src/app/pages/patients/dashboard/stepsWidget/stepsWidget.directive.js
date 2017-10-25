/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .directive('stepsWidget', stepsWidget);

  /** @ngInject */
  function stepsWidget() {
    return {
      restrict: 'E',
      controller: 'StepsWidgetCtrl',
      controllerAs: 'vm',
      scope: {
        patient: '='
      },
      templateUrl: 'app/pages/patients/dashboard/stepsWidget/stepsWidget.html'
    };
  }
})();