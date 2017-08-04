/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users')
    .service('User', User);

  /** @ngInject */
  function User($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/users/:userId', {userId: '@id'}, {
      'update': { method:'PUT'}
    });
  }


  

})();