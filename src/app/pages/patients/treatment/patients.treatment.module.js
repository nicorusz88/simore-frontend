/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.treatment', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('patients.treatment', {
          url: '/:patientId/treatment',
          templateUrl: 'app/pages/patients/treatment/treatment.html',
          controller: 'PatientsTreatmentCtrl',
          controllerAs: "vm"
        });
  }

})();
