'use strict';

angular
  .module('msMealPlannerApp')
  .config(Configuration);

Configuration.$inject = ['$stateProvider'];

function Configuration($stateProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
}
