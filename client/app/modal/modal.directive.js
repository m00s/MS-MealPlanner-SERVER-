'use strict';

angular.module('msMealPlannerApp')
  .directive('modal', function () {
    return {
      templateUrl: 'app/modal/modal.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

      }
    };
  })
  .controller('ModalCtrl', function() {

  });
