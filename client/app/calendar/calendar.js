'use strict';

angular.module('msMealPlannerApp.calendar', ['ui.calendar'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'app/calendar/calendar.html',
        controller: 'CalendarCtrl'
      });
  });
