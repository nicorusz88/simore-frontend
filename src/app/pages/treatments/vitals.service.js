/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments')
    .service('Vital', Vital);

  /** @ngInject */
  function Vital($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/vitals/:cmd', {}, {
      'availables': {
          method: 'GET',
          isArray: true,
          params: {'cmd' : 'availables'}
      },
      'addToTreatment': {
          method: 'POST',
          params: {'cmd' : 'add-to-treatment'}
      }
    });
  }


  

})();