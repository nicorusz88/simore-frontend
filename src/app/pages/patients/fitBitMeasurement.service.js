/**
 * Created by SimoreTeam
 */

(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients')
    .service('FitBitMeasurement', FitBitMeasurement);

  /** @ngInject */
  function FitBitMeasurement($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/measurements/fitbit/:type/treatment/:treatmentId/:cmd/:date', { }, {
      'heartRate': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'heart-rate',
          'cmd': 'date'
        },
      }
    });
  }

})();