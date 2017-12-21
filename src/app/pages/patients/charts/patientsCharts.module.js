/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.charts', [
  ])
  .config(routeConfig).config(chartJsConfig);;

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

  function chartJsConfig(ChartJsProvider, baConfigProvider) {
        var layoutColors = baConfigProvider.colors;
        // Configure all charts
        ChartJsProvider.setOptions({
            chartColors: [
                layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.default, layoutColors.primaryDark, layoutColors.successDark, layoutColors.warningLight, layoutColors.successLight, layoutColors.primaryLight],
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2500
            },
            scale: {
                gridLines: {
                    color: layoutColors.border
                },
                scaleLabel: {
                    fontColor: layoutColors.defaultText
                },
                ticks: {
                    fontColor: layoutColors.defaultText,
                    showLabelBackdrop: false
                }
            }
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
        // Configure all radar charts
        ChartJsProvider.setOptions('radar', {
            scale: {
                pointLabels: {
                    fontColor: layoutColors.defaultText
                },
                ticks: {
                    maxTicksLimit: 5,
                    display: false
                }
            }
        });
        // Configure all bar charts
        ChartJsProvider.setOptions('bar', {
            tooltips: {
                enabled: false
            }
        });
    }

})();
