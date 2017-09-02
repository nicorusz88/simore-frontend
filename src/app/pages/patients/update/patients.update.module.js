/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.update', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('patients.update', {
        url: '/:patientId/update',
        templateUrl: 'app/pages/patients/update/update.html',
        controller: 'PatientsUpdateCtrl',
        controllerAs: 'vm',
        title: 'Editar paciente'
      });
  }

})();