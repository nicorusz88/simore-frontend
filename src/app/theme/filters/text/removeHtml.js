/**
 * @author SimoreTeam
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('SimoreFrontend.theme')
    .filter('plainText', plainText);

  /** @ngInject */
  function plainText() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }

})();
