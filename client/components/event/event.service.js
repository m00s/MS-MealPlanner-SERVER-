'use strict';

angular.module('msMealPlannerApp.event', ['restangular'])
  .factory('Event', function (Restangular) {
    return Restangular.service('events');
  });
