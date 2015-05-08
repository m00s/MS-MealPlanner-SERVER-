'use strict';

angular.module('msMealPlannerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
