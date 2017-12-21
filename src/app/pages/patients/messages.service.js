/**
 * Created by SimoreTeam
 */

(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients')
    .service('Message', Message);

  /** @ngInject */
  function Message($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/messages/:cmd/:user1Id/:user2Id', { }, {
      'send': { 
        method: 'POST',
        params: {
          'cmd': 'send'
        },
      },
      'setRead': { 
        method: 'GET',
        params: {
          'cmd': 'set-read'
        },
      },
      'unread': { 
        method: 'GET',
        params: {
          'cmd': 'unread'
        },
      },
      'conversation': { 
        method: 'GET',
        isArray: true,
        params: {
          'cmd': 'conversation'
        },
      }
    });
  }

})();