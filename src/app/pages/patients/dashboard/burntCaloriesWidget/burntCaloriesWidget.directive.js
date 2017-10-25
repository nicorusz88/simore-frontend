/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .directive('burntCaloriesWidget', burntCaloriesWidget);

  /** @ngInject */
  function burntCaloriesWidget() {
    return {
      restrict: 'E',
      controller: 'BurntCaloriesWidgetCtrl',
      controllerAs: 'vm',
      scope: {
        patient: '='
      },
      templateUrl: 'app/pages/patients/dashboard/burntCaloriesWidget/burntCaloriesWidget.html'
    };
  }
})();