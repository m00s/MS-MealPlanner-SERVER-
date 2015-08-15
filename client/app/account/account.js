'use strict';

angular
  .module('msMealPlannerApp.account', [])
  .config(Configuration);

Configuration.$inject = ['$stateProvider'];

function Configuration($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/account/login/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/account/signup/signup.html',
      controller: 'SignupCtrl',
      controllerAs: 'vm'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'app/account/settings/settings.html',
      controller: 'SettingsCtrl',
      controllerAs: 'vm',
      authenticate: true
    });
}
