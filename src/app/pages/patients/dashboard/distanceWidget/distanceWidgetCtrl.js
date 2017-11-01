/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('DistanceWidgetCtrl', DistanceWidgetCtrl);

  /** @ngInject */
  function DistanceWidgetCtrl($scope, FitBitMeasurement, colorHelper) {
      var vm = this;
      vm.patient = $scope.patient;
      vm.data = undefined;

      FitBitMeasurement.distance({treatmentId: vm.patient.treatment.id, date: moment().format("YYYY-MM-DD")}, function(data){
        vm.data = data;
      });


  }
})();