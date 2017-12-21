/**
 * @author SimoreTeam
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients.messages')
      .controller('PatientsMessagesCtrl', PatientsMessagesCtrl);

  /** @ngInject */
  function PatientsMessagesCtrl($scope, $state, $stateParams, Auth, User, Message) {
    var vm = this;
    vm.patient = undefined;
    vm.professional = Auth.isLoggedIn();
    vm.messageText = '';
    vm.messages = undefined;
    vm.send = send;
    vm.loadMessages = loadMessages;

    loadPatient();
 
    ////////////////////

    function loadPatient(){
      User.get( { userId: $stateParams.patientId}, function(user) {
        vm.patient = user;
        vm.loadMessages();
      });
    }

    function loadMessages(){
      Message.conversation({user1Id: vm.professional.id, user2Id: vm.patient.id}, function(data){
        vm.messages = data;
        for(let i = 0; i < vm.messages.length; i++){
          if (vm.messages[i].from.id == vm.patient.id && !vm.messages[i].read){
            Message.setRead({user1Id: vm.messages[i].id}, function(data){});
          }
        }

      });
    }

    function send(){
      Message.send({}, {text: vm.messageText, from: {id: vm.professional.id}, to: {id: vm.patient.id}}, function(data){
        vm.messageText = '';
        vm.loadMessages();
      });
    }
    
  }

})();
