/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('HeartRateWidgetCtrl', HeartRateWidgetCtrl);

  /** @ngInject */
  function HeartRateWidgetCtrl($scope, FitBitMeasurement, colorHelper) {
      var vm = this;
      vm.patient = $scope.patient;

      FitBitMeasurement.heartRate({treatmentId: vm.patient.treatment.id, date: moment().format("YYYY-MM-DD")}, function(data){
        console.log(data);
      });


  }
})();