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
    vm.smartTableData = [];

    User.query(function(data) {
      vm.smartTableData = data;
    });

  }

})();