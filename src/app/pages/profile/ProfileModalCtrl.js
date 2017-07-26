/**
 * @author SimoreTeam
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.profile')
    .controller('ProfileModalCtrl', ProfileModalCtrl);

  /** @ngInject */
  function ProfileModalCtrl($scope, $uibModalInstance) {
    $scope.link = '';
    $scope.ok = function () {
      $uibModalInstance.close($scope.link);
    };
  }

})();