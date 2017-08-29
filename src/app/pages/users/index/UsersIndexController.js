/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.users.index')
    .controller('UsersIndexCtrl', UsersIndexCtrl);

  /** @ngInject */
  function UsersIndexCtrl(User) {
    var vm = this;
    vm.users = [];
    vm.displayedUsers = [];
    User.query({cmd: 'roles', roles: 'ADMINISTRATOR,PROFESSIONAL'}, function(data) {
      vm.users = data;
      vm.displayedUsers = data;
    });

  }

})();