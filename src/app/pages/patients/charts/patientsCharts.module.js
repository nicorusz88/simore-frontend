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
        .state('patients.heartRate', {
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
        })
        .state('patients.steps', {
          url: '/:patientId/charts/steps',
          templateUrl: 'app/pages/patients/charts/widgets/steps.html',
          controller: 'PatientsChartsStepsCtrl',
          controllerAs: "vm",
          title: 'Pasos',
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['PROFESSIONAL']);
            }
          }
        })
        .state('patients.distance', {
          url: '/:patientId/charts/distance',
          templateUrl: 'app/pages/patients/charts/widgets/distance.html',
          controller: 'PatientsChartsDistanceCtrl',
          controllerAs: "vm",
          title: 'Distancia Recorrida',
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['PROFESSIONAL']);
            }
          }
        })
        .state('patients.weight', {
          url: '/:patientId/charts/weight',
          templateUrl: 'app/pages/patients/charts/widgets/weight.html',
          controller: 'PatientsChartsWeightCtrl',
          controllerAs: "vm",
          title: 'Peso',
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['PROFESSIONAL']);
            }
          }
        })
        .state('patients.burntCalories', {
          url: '/:patientId/charts/burntCalories',
          templateUrl: 'app/pages/patients/charts/widgets/burntCalories.html',
          controller: 'PatientsChartsBurntCaloriesCtrl',
          controllerAs: "vm",
          title: 'Calorías quemadas',
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['PROFESSIONAL']);
            }
          }
        });
  }

})();
