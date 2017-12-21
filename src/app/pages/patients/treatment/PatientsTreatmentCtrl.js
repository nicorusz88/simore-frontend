/**
 * @author SimoreTeam
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.treatment')
    .controller('PatientsTreatmentCtrl', PatientsTreatmentCtrl);

  /** @ngInject */
  function PatientsTreatmentCtrl($scope, $stateParams, $state, $uibModal, User, Vital, Checkin, Medication, Appointment, Recommendation) {
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

    // Recommendations
    vm.newRecommendation = newRecommendation;
    vm.newRecommendationModal = undefined;
    vm.addRecommendation = addRecommendation;

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
          $ctrl.checkin = {question: {choiceQuestionOptions: []}};
          $ctrl.addCheckin = addCheckin;

          $ctrl.addOption = addOption;
          $ctrl.removeOption = removeOption;

          function addOption(){
            $ctrl.checkin.question.choiceQuestionOptions.push({});
          }

          function removeOption(option){
            $ctrl.checkin.question.choiceQuestionOptions.splice($ctrl.checkin.question.choiceQuestionOptions.indexOf(option), 1);
          }

        },
        resolve: {
          addCheckin: function(){
            return vm.addCheckin;
          }
        }
      });
    }

    function addCheckin(checkin){
      if (checkin.name != ''){
        if (checkin.question.choiceQuestionOptions.length == 0){
          delete checkin.question.choiceQuestionOptions;
        }
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
          $ctrl.appointment = {date: new Date()};
          $ctrl.addAppointment = addAppointment;

          // date and time picker
          $ctrl.datePicker = {
            date: new Date()
          };

          $ctrl.openCalendar = function() {
            $ctrl.datePicker.open = true;
          };
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


    // Recommendations Methods

    function newRecommendation(){
      vm.newRecommendationModal = $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/patients/widgets/newRecommendation.html',
        size: 'md',
        controllerAs: '$ctrl',
        controller: function(addRecommendation){
          var $ctrl = this;
          $ctrl.recomendation = undefined;
          $ctrl.addRecommendation = addRecommendation;
        },
        resolve: {
          addRecommendation: function(){
            return vm.addRecommendation;
          }
        }
      });
    }

    function addRecommendation(recomendation){
      if (recomendation){
        Recommendation.addToTreatment({treatmentId: vm.entry.treatment.id}, recomendation, function(){
          loadPatient();
        });
      }
      vm.newRecommendationModal.close();
    }

    function uploadPicture() {
      console.log("uploadPicture");
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();
    };
  }

})();