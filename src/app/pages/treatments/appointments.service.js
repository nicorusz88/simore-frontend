/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments')
    .service('Appointment', Appointment);

  /** @ngInject */
  function Appointment($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/appointments/:cmd', {}, {
      'addToTreatment': {
          method: 'POST',
          params: {'cmd' : 'add-to-treatment'}
      }
    });
  }


  

})();