/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments')
    .service('Medication', Medication);

  /** @ngInject */
  function Medication($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/medications/:cmd', {}, {
      'addToTreatment': {
          method: 'POST',
          params: {'cmd' : 'add-to-treatment'}
      }
    });
  }


  

})();