/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('MedicationsWidgetCtrl', MedicationsWidgetCtrl);

  /** @ngInject */
  function MedicationsWidgetCtrl($scope, Medication, colorHelper) {
      var vm = this;
      vm.patient = $scope.patient;
      vm.medications = undefined;

      loadMedications();


      function loadMedications(){
        Medication.user({userId: vm.patient.id}, function(data){
          vm.medications = data;
        });
      }

  }
})();