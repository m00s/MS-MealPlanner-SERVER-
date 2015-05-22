'use strict';

angular.module('msMealPlannerApp.calendar')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'app/event/calendar/calendar.html',
        controller: 'CalendarCtrl'
      });
  });
