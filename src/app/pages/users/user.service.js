/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users')
    .service('User', User);

  /** @ngInject */
  function User($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/users/:userId/:cmd', {userId: '@id'}, 
    {
      'update': { method:'PUT'},
      'fitbit': {
         method: 'POST',
         params: {'cmd' : 'fitbit'}
      },
      'getPatients': {
         method: 'GET',
         params: {'cmd' : 'get-patients'},
         isArray: true
      }
    });
  }


  

})();