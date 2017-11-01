/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('CheckinsWidgetCtrl', CheckinsWidgetCtrl);

  /** @ngInject */
  function CheckinsWidgetCtrl($scope, FitBitMeasurement, colorHelper) {
      var vm = this;
      vm.patient = $scope.patient;
      vm.data = undefined;


  }
})();