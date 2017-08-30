/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.users.index')
    .controller('PatientsIndexCtrl', PatientsIndexCtrl);

  /** @ngInject */
  function PatientsIndexCtrl(User) {
    var vm = this;
    vm.users = [];
    vm.displayedUsers = [];
    User.query({cmd: 'roles', roles: 'PACIENT'}, function(data) {
      vm.users = data;
      vm.displayedUsers = data;
    });

  }

})();