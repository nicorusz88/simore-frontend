/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.users.create')
    .controller('UsersFitbitCtrl', UsersFitbitCtrl);

  /** @ngInject */
  function UsersFitbitCtrl($state, Auth, User) {
    var vm = this;

    var access_token;
    var expires_in;
    var account_user_id;
    var principalResource = Auth.getResource();
    var currentUser = Auth.isLoggedIn();

    if (JSON.parse(window.localStorage.getItem("fitbit")) && currentUser) {
      access_token = JSON.parse(window.localStorage.getItem("fitbit")).oauth.access_token;
      expires_in = JSON.parse(window.localStorage.getItem("fitbit")).oauth.expires_in;
      account_user_id = JSON.parse(window.localStorage.getItem("fitbit")).oauth.account_user_id;

      console.log(currentUser);

      User.fitbit({userId: currentUser.id}, {wearableType: 'FITBIT', access_token: access_token, expires_in: expires_in, user_id: account_user_id}, function(data){
        localStorage.removeItem("fitbit");
        $state.go("patients.index");
      });
    }else{
      $state.go("patients.index");
    }




  }


})();