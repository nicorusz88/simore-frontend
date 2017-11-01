/**
 * Created by SimoreTeam
 */

(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients')
    .service('FitBitMeasurement', FitBitMeasurement);

  /** @ngInject */
  function FitBitMeasurement($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/measurements/fitbit/:type/treatment/:treatmentId/:cmd/:date/:cmd2/:date2', { }, {
      'heartRate': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'heart-rate',
          'cmd': 'date'
        },
      },
      'steps': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'steps',
          'cmd': 'date'
        },
      },
      'weight': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'weight',
          'cmd': 'date'
        },
      },
      'burntCalories': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'burnt-calories',
          'cmd': 'date'
        },
      },
      'bloodPressure': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'blood-pressure',
          'cmd': 'date'
        },
      },
      'distance': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'distance',
          'cmd': 'date'
        }
      },
    });
  }

})();