'use strict';

angular
  .module('msMealPlannerApp')
  .config(Configuration);

Configuration.$inject = ['$stateProvider'];

function Configuration($stateProvider) {
  $stateProvider
    .state('new', {
      url: '/recipes/new',
      templateUrl: 'app/recipe/new/new.html',
      controller: 'NewCtrl',
      controllerAs: 'vm'
    });
}
