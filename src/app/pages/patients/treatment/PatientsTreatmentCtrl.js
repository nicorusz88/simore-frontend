/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.treatment')
    .controller('PatientsTreatmentCtrl', PatientsTreatmentCtrl);

  /** @ngInject */
  function PatientsTreatmentCtrl($scope, $state, User, TreatmentTemplate) {
    var vm = this;
    vm.entry = new User({ roles: [{ id: 2, name: 'PACIENT' }] });

    vm.save = save;
    vm.arePersonalInfoPasswordsEqual = arePersonalInfoPasswordsEqual;

    vm.treatmentsTemplates = [];
    vm.proffesionals = [];

    TreatmentTemplate.query({}, function(data) {
      vm.treatmentsTemplates = data;
    });

    User.query({ cmd: 'roles', roles: 'PROFESSIONAL' }, function(data) {
      vm.proffesionals = data;
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

    function arePersonalInfoPasswordsEqual() {
      return vm.entry.confirmPassword && vm.entry.password == vm.entry.confirmPassword;
    }

    function open() {
      vm.opened = true;
    }

    function save(form) {
      if (form.$valid) {
        vm.error = {};

        vm.entry.$save({}, function() {
          $state.go('patients.index', null, { reload: true });
        });
      }
    }
  }

})();