/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users.create')
      .controller('UsersCreateCtrl', UsersCreateCtrl);

  /** @ngInject */
  function UsersCreateCtrl($state, User, Role) {
    var vm = this;
    vm.entry = new User({});
    vm.error = {};
    vm.save = save;
    vm.roles = [];




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
