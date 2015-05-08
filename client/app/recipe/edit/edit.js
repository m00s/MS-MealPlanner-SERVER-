'use strict';

angular.module('msMealPlannerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit', {
        url: '/recipes/edit/:id',
        templateUrl: 'app/recipe/edit/edit.html',
        controller: 'EditCtrl'
      });
  });
