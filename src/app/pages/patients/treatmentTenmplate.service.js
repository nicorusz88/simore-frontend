/**
 * Created by SimoreTeam
 */

(function () {
  'use strict';

  angular.module('SimoreFrontend.pages.patients')
    .service('TreatmentTemplate', TreatmentTemplate);

  /** @ngInject */
  function TreatmentTemplate($resource, config) {
    return $resource(config.apiUrl + ':' + config.apiPort + '/treatments-templates/:treatmentTemplateId/:cmd', {treatmentTemplateId: '@id'}, {
      'update': { method:'PUT'}
    });
  }


  

})();