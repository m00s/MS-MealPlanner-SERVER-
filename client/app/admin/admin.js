'use strict';

angular
  .module('msMealPlannerApp.admin', [])
  .config(Configuration);

Configuration.$inject = ['$stateProvider'];

function Configuration($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminCtrl',
      controllerAs: 'vm'
    });
}
