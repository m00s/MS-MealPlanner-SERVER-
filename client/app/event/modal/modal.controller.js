'use strict';

angular
  .module('msMealPlannerApp.calendar')
  .controller('ModalCtrl', ModalCtrl);

ModalCtrl.$inject = ['$modalInstance', '$filter', 'date', 'events', 'Recipe'];

function ModalCtrl($modalInstance, $filter, date, events, Recipe) {
  var vm = this;

  vm.events = organizeMeal(events);
  vm.inputDate = date._d;
  vm.outputDate = $filter('date')(vm.inputDate, 'fullDate');
  Recipe.getList().then(function (response) {
    vm.recipes = response.plain();
  });

  vm.close = function () {
    $modalInstance.close();
  };

  vm.submit = function () {
    console.log('Event lunch:',vm.events[0]);
    console.log('Event dinner:',vm.events[1]);
  };

  vm.openDatepicker = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    vm.opened = true;
  };

  vm.today = function() {
    vm.outputDate = new Date();
  };

  vm.today();

  vm.clear = function () {
    vm.outputDate = null;
  };

  vm.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  function organizeMeal(events) {
    if(events.length){
      if(events[0].meal === 'Lunch' && !events[1]){
        events.push({});
      }
      else{
        if(events[0].meal === 'Dinner'){
          events.unshift({});
        }
      }
    }

    return events;
  }

  vm.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<vm.events.length;i++){
        var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return vm.events[i].status;
        }
      }
    }

    return '';
  };
}
