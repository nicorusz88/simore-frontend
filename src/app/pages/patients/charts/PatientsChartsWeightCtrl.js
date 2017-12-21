/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.dashboard')
      .controller('PatientsChartsWeightCtrl', PatientsChartsWeightCtrl);

  /** @ngInject */
  function PatientsChartsWeightCtrl($scope, $state, $stateParams, User, FitBitMeasurement) {
    var vm = this;
    vm.entry = undefined;

    loadPatient();

    vm.labels =[];
    vm.data = [];
    vm.series = ['Peso', 'BMI', 'Grasa'];
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
      FitBitMeasurement.weightHistory({treatmentId: vm.entry.treatment.id, date: moment(vm.dateFrom).format('YYYY-MM-DD'), date2: moment(vm.dateTo).format('YYYY-MM-DD')}, function(data){
        var weight = [];
        var bmi = [];
        var fat = [];
        var labels = [];

        for(var i = 0; i < data.length; i++){
          weight[i] = data[i].weight;
          bmi[i] = data[i].bmi;
          fat[i] = data[i].fat;
          labels[i] = moment(data[i].date).format('YYYY-MM-DD');
        }

        vm.labels = labels;
        vm.data = [weight, bmi, fat];
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
