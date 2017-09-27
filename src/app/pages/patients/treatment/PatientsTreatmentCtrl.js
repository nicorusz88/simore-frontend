/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.treatment')
    .controller('PatientsTreatmentCtrl', PatientsTreatmentCtrl);

  /** @ngInject */
  function PatientsTreatmentCtrl($scope, $stateParams, $state, $uibModal, User, Vital, Checkin, Medication, Appointment, Recomendation) {
    var vm = this;
    vm.entry = undefined;

    // Vitals
    vm.newVital = newVital;
    vm.newVitalModal = undefined;
    vm.addVital = addVital;

    // Checkins
    vm.newCheckin = newCheckin;
    vm.newCheckinModal = undefined;
    vm.addCheckin = addCheckin;

    // Medications
    vm.newMedication = newMedication;
    vm.newMedicationModal = undefined;
    vm.addMedication = addMedication;

    // Appointments
    vm.newAppointment = newAppointment;
    vm.newAppointmentModal = undefined;
    vm.addAppointment = addAppointment;

    // Recomendations
    vm.newRecomendation = newRecomendation;
    vm.newRecomendationModal = undefined;
    vm.addRecomendation = addRecomendation;

    loadPatient();

 
    ////////////////////

    function loadPatient(){
      User.get( { userId: $stateParams.patientId}, function(user) {
        vm.entry = user;
      });
    }

    // Vitals Methods

    function newVital(){
      vm.newVitalModal = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/patients/widgets/newVital.html',
        size: 'md',
        controllerAs: '$ctrl',
        controller: function(addVital, availableVitals){
          var $ctrl = this;
          $ctrl.vital = undefined;
          $ctrl.addVital = addVital;
          $ctrl.availableVitals = availableVitals;
        },
        resolve: {
          addVital: function(){
            return vm.addVital;
          },
          availableVitals: function(){
            return Vital.availables({treatmentId: vm.entry.treatment.id});
          }
        }
      });
    }

    function addVital(vital){
      if (vital){
        Vital.addToTreatment({treatmentId: vm.entry.treatment.id}, vital, function(){
          loadPatient();
        });
      }
      vm.newVitalModal.close();
    }


    // Checkins Methods

    function newCheckin(){
      vm.newCheckinModal = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/patients/widgets/newCheckin.html',
        size: 'md',
        controllerAs: '$ctrl',
        controller: function(addCheckin){
          var $ctrl = this;
          $ctrl.checkin = undefined;
          $ctrl.addCheckin = addCheckin;
        },
        resolve: {
          addCheckin: function(){
            return vm.addCheckin;
          }
        }
      });
    }

    function addCheckin(checkin){
      if (checkin){
        Checkin.addToTreatment({treatmentId: vm.entry.treatment.id}, checkin, function(){
          loadPatient();
        });
      }
      vm.newCheckinModal.close();
    }


    // Medications Methods

    function newMedication(){
      vm.newMedicationModal = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/patients/widgets/newMedication.html',
        size: 'md',
        controllerAs: '$ctrl',
        controller: function(addMedication){
          var $ctrl = this;
          $ctrl.medication = undefined;
          $ctrl.addMedication = addMedication;
        },
        resolve: {
          addMedication: function(){
            return vm.addMedication;
          }
        }
      });
    }

    function addMedication(medication){
      if (medication){
        Medication.addToTreatment({treatmentId: vm.entry.treatment.id}, medication, function(){
          loadPatient();
        });
      }
      vm.newMedicationModal.close();
    }

    // Appointments Methods

    function newAppointment(){
      vm.newAppointmentModal = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/patients/widgets/newAppointment.html',
        size: 'md',
        controllerAs: '$ctrl',
        controller: function(addAppointment){
          var $ctrl = this;
          $ctrl.appointment = undefined;
          $ctrl.addAppointment = addAppointment;
        },
        resolve: {
          addAppointment: function(){
            return vm.addAppointment;
          }
        }
      });
    }

    function addAppointment(appointment){
      if (appointment){
        Appointment.addToTreatment({treatmentId: vm.entry.treatment.id}, appointment, function(){
          loadPatient();
        });
      }
      vm.newAppointmentModal.close();
    }


    // Recomendations Methods

    function newRecomendation(){
      vm.newRecomendationModal = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/patients/widgets/newRecomendation.html',
        size: 'md',
        controllerAs: '$ctrl',
        controller: function(addRecomendation){
          var $ctrl = this;
          $ctrl.recomendation = undefined;
          $ctrl.addRecomendation = addRecomendation;
        },
        resolve: {
          addRecomendation: function(){
            return vm.addRecomendation;
          }
        }
      });
    }

    function addRecomendation(recomendation){
      if (recomendation){
        Recomendation.addToTreatment({treatmentId: vm.entry.treatment.id}, recomendation, function(){
          loadPatient();
        });
      }
      vm.newRecomendationModal.close();
    }
    
    
    
  }

})();