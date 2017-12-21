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
      'heartRateHistory': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'heart-rate',
          'cmd': 'start-date',
          'cmd2': 'end-date'
        }
      },
      'steps': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'steps',
          'cmd': 'date'
        },
      },
      'stepsHistory': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'steps',
          'cmd': 'start-date',
          'cmd2': 'end-date'
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
      'weightHistory': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'weight',
          'cmd': 'start-date',
          'cmd2': 'end-date'
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
      'burntCaloriesHistory': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'burnt-calories',
          'cmd': 'start-date',
          'cmd2': 'end-date'
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
      'distanceHistory': { 
        method: 'GET',
        isArray: true,
        params: {
          'type' : 'distance',
          'cmd': 'start-date',
          'cmd2': 'end-date'
        },
      }
    });
  }

})();