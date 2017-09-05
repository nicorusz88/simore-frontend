/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.theme.components')
    .controller('PageTopCtrl', PageTopCtrl);

  /** @ngInject */
  function PageTopCtrl($scope, Auth) {

    $scope.hidePageTop = Auth.isLoggedIn();
    
  }
})();