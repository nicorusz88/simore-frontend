/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.create', [
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('patients.create', {
          url: '/create',
          templateUrl: 'app/pages/patients/create/create.html',
          controller: 'PatientsCreateCtrl',
          controllerAs: "vm",
          title: 'Nuevo paciente',
          sidebarMeta: {
            icon: 'ion-person-add',
            order: 220,
          },
          resolve: {
            canAccess: function (Auth){
              return Auth.checkRoles(['ADMINISTRATOR', 'PROFESSIONAL']);
            }
          }
        });
  }

})();
