/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments')
    .service('Recommendation', Recommendation);

  /** @ngInject */
  function Recommendation($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/recommendations/:cmd', {}, {
      'addToTreatment': {
          method: 'POST',
          params: {'cmd' : 'add-to-treatment'}
      }
    });
  }


  

})();