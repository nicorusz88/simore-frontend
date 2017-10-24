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

    loadPatient();

 
    ////////////////////

    function loadPatient(){
      User.get( { userId: $stateParams.patientId}, function(user) {
        vm.entry = user;
      });
    }
  }

})();
