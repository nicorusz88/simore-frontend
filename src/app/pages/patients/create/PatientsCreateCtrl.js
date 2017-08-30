/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.create')
      .controller('PatientsCreateCtrl', PatientsCreateCtrl);

  /** @ngInject */
  function PatientsCreateCtrl($state, User, TreatmentTemplate) {
    var vm = this;
    vm.entry = new User({roles: [{name: 'PACIENT'}]});
    vm.error = {};
    vm.save = save;
    vm.treatmentsTemplates = [];

    TreatmentTemplate.query({}, function(data) {
      vm.treatmentsTemplates = data;
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

    function open() {
      vm.opened = true;
    }

    function save (form) {
      if (form.$valid) {
        vm.error = {};

        vm.entry.$save({}, function() {
          $state.go('patients.index', null, {reload: true});
        });
      }
    }
  }

})();
