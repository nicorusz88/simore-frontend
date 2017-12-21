/**
 * @author SimoreTeam
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.messages', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('patients.messages', {
          url: '/:patientId/messages',
          templateUrl: 'app/pages/patients/messages/messages.html',
          controller: 'PatientsMessagesCtrl',
          controllerAs: "vm",
          title: 'Mensajes',
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['PROFESSIONAL']);
            }
          }
        });
  }

})();