/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.charts', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('patients.charts', {
          url: '/:patientId/charts/heartRate',
          templateUrl: 'app/pages/patients/charts/widgets/heartRate.html',
          controller: 'PatientsChartsHeartRateCtrl',
          controllerAs: "vm",
          title: 'Heart Rate',
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['PROFESSIONAL']);
            }
          }
        });
  }

})();
