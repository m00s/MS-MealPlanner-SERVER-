'use strict';

angular.module('msMealPlannerApp.calendar', ['ui.calendar', 'msMealPlannerApp.event'])
  .controller('CalendarCtrl', calendarFn);

calendarFn.$inject = ['$scope', 'Event', '$modal', 'templates'];

function calendarFn($scope, Event, $modal, templates) {

  $scope.eventCollection = {
    events: function(start, end, timezone, cb) {
      Event.getList()
        .then(function(response){
          var events = [];
          angular.forEach(response, function(value) {
            events.push(value.data);
          });
          cb(events);
        });
    }
  };

  $scope.uiConfig = {
    calendar: {
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

  function alertEventOnClick(date) {

    $modal.open({
      animation: true,
      templateUrl: templates.eventModal,
      controller: 'ModalCtrl',
      size: 'md',
      resolve: {
        date: function () {
          return date;
        }
      }
    });
  }

  function alertOnDrop() {
    console.log('alertOnDrop()');
  }

  function alertOnResize() {
    console.log('alertOnResize()');
  }
}
