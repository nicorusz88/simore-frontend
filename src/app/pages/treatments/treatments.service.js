/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments')
    .service('Treatment', Treatment);

  /** @ngInject */
  function Treatment($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/treatments/:treatmentId', {treatmentId: '@id'}, {
      'update': { method:'PUT'}
    });
  }


  

})();