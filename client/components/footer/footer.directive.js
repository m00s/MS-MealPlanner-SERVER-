'use strict';

angular.module('msMealPlannerApp.footer', [])
  .directive('msFooter', function (templates) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: templates.footer,
      scope: {},
      link: function(scope) {

      }
    }

  });
