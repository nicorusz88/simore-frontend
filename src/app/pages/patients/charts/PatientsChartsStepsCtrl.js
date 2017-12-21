/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('PatientsChartsStepsCtrl', PatientsChartsStepsCtrl);

  /** @ngInject */
  function PatientsChartsStepsCtrl($scope, $state, $stateParams, User, FitBitMeasurement) {
    var vm = this;
    vm.entry = undefined;

    loadPatient();

    vm.labels =[];
    vm.data = [];
    vm.series = ['Pasos'];
    vm.loadData = loadData;

    vm.dateFrom = new Date(moment().startOf('month').format());
    vm.dateTo = new Date(moment().format());

    vm.options = {
      showWeeks: false
    };
    vm.open = open;
    vm.opened = false;

    vm.options2 = {
      showWeeks: false
    };
    vm.open2 = open2;
    vm.opened2 = false;
    


    ////////////////////

    function loadPatient(){
      User.get( { userId: $stateParams.patientId}, function(user) {
        vm.entry = user;

        vm.loadData();
      });
    }


    function loadData(){
      FitBitMeasurement.stepsHistory({treatmentId: vm.entry.treatment.id, date: moment(vm.dateFrom).format('YYYY-MM-DD'), date2: moment(vm.dateTo).format('YYYY-MM-DD')}, function(data){
        var steps = [];
        var labels = [];

        for(var i = 0; i < data.length; i++){
          steps[i] = data[i].value;
          labels[i] = moment(data[i].date).format('YYYY-MM-DD');
        }

        vm.labels = labels;
        vm.data = [steps];
      });
    }

    function open() {
      vm.opened = true;
    }

    function open2() {
      vm.opened2 = true;
    }
    
  }

})();
