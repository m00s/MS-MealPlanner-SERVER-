'use strict';

angular.module('msMealPlannerApp.calendar')
  .controller('ModalCtrl', function ($scope, $modalInstance, $filter, date) {
    $scope.inputDate = date._d;

    $scope.outputDate = $filter('date')($scope.inputDate, 'fullDate');

    $scope.close = function () {
      $modalInstance.close();
    };

    $scope.close = function () {

      $modalInstance.close();
    };

    $scope.openDatepicker = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

    $scope.today = function() {
      $scope.outputDate = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.outputDate = null;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.getDayClass = function(date, mode) {
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i=0;i<$scope.events.length;i++){
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    };

  });
