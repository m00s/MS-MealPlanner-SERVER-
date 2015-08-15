'use strict';

angular
  .module('msMealPlannerApp')
  .config(Configuration);

Configuration.$inject = ['$stateProvider'];

function Configuration($stateProvider) {
  $stateProvider
    .state('edit', {
      url: '/recipes/edit/:id',
      templateUrl: 'app/recipe/edit/edit.html',
      controller: 'EditCtrl',
      controllerAs: 'vm'
    });
}
