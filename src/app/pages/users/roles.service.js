/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.users')
    .service('Role', Role);

  /** @ngInject */
  function Role($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/roles/:roleId', {roleId: '@id'}, {
      'update': { method:'PUT'}
    });
  }


  

})();