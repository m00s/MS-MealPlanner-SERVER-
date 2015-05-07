'use strict';

angular.module('msMealPlannerApp')
  .controller('MainCtrl', function ($scope, $location, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;

  });
