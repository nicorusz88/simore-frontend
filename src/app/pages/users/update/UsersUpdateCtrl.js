/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users.update')
      .controller('UsersUpdateCtrl', UsersUpdateCtrl);

  /** @ngInject */
  function UsersUpdateCtrl($state, $stateParams, User) {
    var vm = this;

    vm.entry = {};
    vm.error = {};
    vm.save = save;

    User.get( { userId: $stateParams.userId}, function(user) {
      vm.entry = user;
    });


    ////////////////////


    function save (form) {
      if (form.$valid) {
        vm.error = {};

        User.update({ userId: $stateParams.userId }, vm.entry, function(){
          $state.go('users.index', null, {reload: true});
        });
      }
    }
  }

})();
