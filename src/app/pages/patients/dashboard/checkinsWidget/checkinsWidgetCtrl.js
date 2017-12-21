/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('CheckinsWidgetCtrl', CheckinsWidgetCtrl);

  /** @ngInject */
  function CheckinsWidgetCtrl($scope, Checkin, colorHelper) {
      var vm = this;
      vm.patient = $scope.patient;
      vm.checkins = undefined;

      loadCheckIns();

      function loadCheckIns(){
        Checkin.answered({userId: vm.patient.id}, function(data){
          vm.checkins = data;
        });
      }
  }
})();