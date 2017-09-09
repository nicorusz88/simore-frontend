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
    vm.fitbitLogin = fitbitLogin;
    User.query({ cmd: 'roles', roles: 'PACIENT' }, function(data) {
      vm.users = data;
      vm.displayedUsers = data;
    });


    function fitbitLogin(){
      var fitbit_client_id = "228L4M";
      window.location.href = "https://www.fitbit.com/oauth2/authorize?client_id=" + fitbit_client_id + "&response_type=token&scope=activity%20profile%20heartrate%20location%20nutrition%20sleep%20weight&expires_in=31536000";
    }

  }

})();