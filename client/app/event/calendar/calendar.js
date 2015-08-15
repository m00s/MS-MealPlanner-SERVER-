'use strict';

angular
  .module('msMealPlannerApp.calendar')
  .config(Configuration);

Configuration.$inject = ['$stateProvider'];

function Configuration($stateProvider) {
  $stateProvider
    .state('calendar', {
      url: '/calendar',
      templateUrl: 'app/event/calendar/calendar.html',
      controller: 'CalendarCtrl',
      controllerAs: 'vm'
    });
}
