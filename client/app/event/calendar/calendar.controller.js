'use strict';

angular
  .module('msMealPlannerApp.calendar', ['ui.calendar', 'msMealPlannerApp.event'])
  .controller('CalendarCtrl', calendarFn);

calendarFn.$inject = ['Event', '$modal', 'templates', 'Restangular'];

function calendarFn(Event, $modal, templates, Restangular) {

  var vm = this;

  vm.eventCollection = {
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

  vm.uiConfig = {
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

  function eventsOnDate(date){
    return Restangular.one('events').get({'date': date});
  }

  function alertEventOnClick(date) {
    eventsOnDate(date._d).then(function (response) {
      $modal.open({
        animation: true,
        templateUrl: templates.eventModal,
        controller: 'ModalCtrl',
        controllerAs: 'vm',
        size: 'md',
        resolve: {
          date: function () {
            return date;
          },
          events: function () {
            return response.plain();
          }
        }
      });
    });
  }

  function alertOnDrop() {
    console.log('alertOnDrop()');
  }

  function alertOnResize() {
    console.log('alertOnResize()');
  }
}
