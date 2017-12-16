/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('PatientsChartsWeightCtrl', PatientsChartsWeightCtrl);

  /** @ngInject */
  function PatientsChartsWeightCtrl($scope, $state, $stateParams, User) {
    var vm = this;
    vm.entry = undefined;

    loadPatient();

    vm.labels =["May", "Jun", "Jul", "Aug", "Sep"];
    vm.data = [
      [65, 59, 90, 81, 56],
      [28, 48, 40, 19, 88]
    ];
    vm.series = ['Product A', 'Product B'];


    $scope.changeData = function () {
      vm.data[0] = shuffle(vm.data[0]);
      vm.data[1] = shuffle(vm.data[1]);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }

 
    ////////////////////

    function loadPatient(){
      User.get( { userId: $stateParams.patientId}, function(user) {
        vm.entry = user;
      });
    }
    
  }

})();
