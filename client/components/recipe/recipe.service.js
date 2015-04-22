'use strict';

angular.module('msMealPlannerApp.recipe', ['restangular'])
  .factory('Recipe', function (Restangular) {
    return Restangular.service('recipes');
  });
