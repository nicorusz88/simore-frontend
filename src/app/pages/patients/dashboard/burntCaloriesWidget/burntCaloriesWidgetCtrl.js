/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('BurntCaloriesWidgetCtrl', BurntCaloriesWidgetCtrl);

  /** @ngInject */
  function BurntCaloriesWidgetCtrl($scope, FitBitMeasurement, colorHelper) {
      var vm = this;
      vm.patient = $scope.patient;
      vm.data = undefined;

      FitBitMeasurement.burntCalories({treatmentId: vm.patient.treatment.id, date: moment().format("YYYY-MM-DD")}, function(data){
        vm.data = data;
      });


  }
})();