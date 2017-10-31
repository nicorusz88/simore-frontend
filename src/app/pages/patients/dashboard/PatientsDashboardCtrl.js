/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('PatientsDashboardCtrl', PatientsDashboardCtrl);

  /** @ngInject */
  function PatientsDashboardCtrl($scope, $state, $stateParams, User) {
    var vm = this;
    vm.entry = undefined;
    vm.hasVital = hasVital;
    vm.hasCheckins = hasCheckins;
    vm.hasMedications = hasMedications;

    loadPatient();

 
    ////////////////////

    function loadPatient(){
      User.get( { userId: $stateParams.patientId}, function(user) {
        vm.entry = user;
      });
    }

    function hasVital(name){
      if (!vm.entry.treatment){
        return false;
      }

      var exists = vm.entry.treatment.vitals.filter(function(vital){
        return vital.type == name;
      });

      return exists && exists.length >= 1;
    }

    function hasCheckins(){
      return vm.entry.treatment && vm.entry.treatment.checkIns.length > 0;
    }


    function hasMedications(){
      return vm.entry.treatment && vm.entry.treatment.medications.length > 0;
    }
  }

})();
