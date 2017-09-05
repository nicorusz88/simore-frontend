/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.index', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('patients.index', {
        url: '/index',
        templateUrl: 'app/pages/patients/index/index.html',
        controller: 'PatientsIndexCtrl',
        controllerAs: 'vm',
        title: 'Listado pacientes',
        sidebarMeta: {
          icon: 'ion-person-stalker',
          order: 210,
        },
        resolve: {
          canAccess: function (Auth){
            return Auth.checkRoles(['ADMINISTRATOR', 'PROFESSIONAL']);
          }
        }
      });
  }

})();