/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.treatments')
    .service('Checkin', Checkin);

  /** @ngInject */
  function Checkin($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/checkins/:cmd/:userId', {}, {
      'addToTreatment': {
          method: 'POST',
          params: {'cmd' : 'add-to-treatment'}
      },
      'answered': {
          method: 'GET',
          isArray: true,
          params: {'cmd' : 'answered'}
      }
    });
  }


  

})();