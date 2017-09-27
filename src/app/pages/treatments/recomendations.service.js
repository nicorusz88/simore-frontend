/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments')
    .service('Recomendation', Recomendation);

  /** @ngInject */
  function Recomendation($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/recomendations/:cmd', {}, {
      'addToTreatment': {
          method: 'POST',
          params: {'cmd' : 'add-to-treatment'}
      }
    });
  }


  

})();