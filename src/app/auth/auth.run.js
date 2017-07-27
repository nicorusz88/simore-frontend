/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.auth')
    .run(authRun);

  /** @ngInject */
  function authRun($rootScope, $location, $state, $http, principal) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

      event.preventDefault();

      $rootScope.previousState = fromState.name;

      // redirect to login pag if not logged in

      if (principal.isLoggedIn()){
        $state.go(toState.name);
      }else{
        if ($location.path() !== '/login'){
          $state.go('login');
        }
      }

     
    });
  }

})();