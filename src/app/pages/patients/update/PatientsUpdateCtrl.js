/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.update')
      .controller('PatientsUpdateCtrl', PatientsUpdateCtrl);

  /** @ngInject */
  function PatientsUpdateCtrl($state, $stateParams, User, TreatmentTemplate) {
    var vm = this;

    vm.entry = {};
    vm.error = {};
    vm.treatmentsTemplates = [];
    vm.proffesionals = [];

    vm.save = save;
    vm.arePersonalInfoPasswordsEqual = arePersonalInfoPasswordsEqual;

    User.get( { userId: $stateParams.patientId}, function(user) {
      vm.entry = user;
    });

    TreatmentTemplate.query({}, function(data) {
      vm.treatmentsTemplates = data;
    });

    User.query({cmd: 'roles', roles: 'PROFESSIONAL'}, function(data) {
      vm.professionals = data;
    });

    vm.dt = new Date();
    vm.options = {
        showWeeks: false
    };

    vm.open = open;
    vm.opened = false;
    vm.options = {
        showWeeks: false
    };

    ////////////////////

    function arePersonalInfoPasswordsEqual(){
      return vm.entry.confirmPassword && vm.entry.password == vm.entry.confirmPassword;
    }

    function open() {
      vm.opened = true;
    }

    function save (form) {
      if (form.$valid) {
        vm.error = {};

        User.update({ userId: $stateParams.patientId }, vm.entry, function(){
          $state.go('patients.index', null, {reload: true});
        });
      }
    }
  }

})();
