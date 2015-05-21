'use strict';

angular.module('msMealPlannerApp.calendar', ['ui.calendar'])
  .controller('CalendarCtrl', calendarFn);

calendarFn.$inject = ['$scope'];

function calendarFn($scope) {

  $scope.eventCollection = {
    events: [
      {
        title: 'Pranzo: Riso',
        start: '2015-05-04T13:00Z',
        color: 'blue',
        backgroundColor: 'dark',
        textColor: 'white'
      },
      {
        title: 'Cena: Pizza',
        start: '2015-05-04T20:00Z',
        color: 'red',
        backgroundColor: 'white',
        textColor: 'black'
      }
    ]
  };

  $scope.uiConfig = {
    calendar:{
      height: 550,
      header:{
        left: 'month basicWeek basicDay',
        center: 'title',
        right: 'today prev,next'
      },
      dayClick: alertEventOnClick,
      eventDrop: alertOnDrop,
      eventResize: alertOnResize
    }
  };

  function alertEventOnClick() {
    console.log('alertEventOnClick');
  }

  function alertOnDrop() {
    console.log('alertOnDrop()');
  }

  function alertOnResize() {
    console.log('alertOnResize()');
  }
}
