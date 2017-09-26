/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.treatment')
    .controller('PatientsTreatmentCtrl', PatientsTreatmentCtrl);

  /** @ngInject */
  function PatientsTreatmentCtrl($scope, $stateParams, $state, User, TreatmentTemplate) {
    var vm = this;
    vm.entry = undefined;


    User.get( { userId: $stateParams.patientId}, function(user) {
      vm.entry = user;
    });

 
    ////////////////////

    
  }

})();