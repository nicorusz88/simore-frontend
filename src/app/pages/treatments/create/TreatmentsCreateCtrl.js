/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments.create')
      .controller('TreatmentsCreateCtrl', TreatmentsCreateCtrl);

  /** @ngInject */
  function TreatmentsCreateCtrl($state, User) {
    var vm = this;
    vm.entry = new User({});
    vm.error = {};
    vm.save = save;


    ////////////////////


    function save (form) {
      if (form.$valid) {
        vm.error = {};

        vm.entry.$save({}, function() {
          $state.go('users.index', null, {reload: true});
        });
      }
    }
  }

})();
