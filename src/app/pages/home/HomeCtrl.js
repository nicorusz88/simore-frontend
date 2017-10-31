/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.home')
      .controller('HomeCtrl', HomeCtrl);

  /** @ngInject */
  function HomeCtrl($scope, $state, User, Auth) {
    var vm = this;
    vm.currentUser = Auth.isLoggedIn();
    vm.patients = User.getPatients({userId: vm.currentUser.id});
  }

})();
