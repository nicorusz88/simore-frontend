/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('patients.dashboard', {
          url: '/:patientId/dashboard',
          templateUrl: 'app/pages/patients/dashboard/dashboard.html',
          controller: 'PatientsDashboardCtrl',
          controllerAs: "vm",
          title: 'Dashboard',
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['PROFESSIONAL']);
            }
          }
        });
  }

})();
