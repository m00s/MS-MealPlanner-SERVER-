'use strict';

angular.module('msMealPlannerApp')
  .controller('MainCtrl', function ($scope, $location, Auth) {

    $scope.addRecipe = function() {
      console.log('addRecipe()');
      $location.path('/new');
    };

    $scope.isLoggedIn = Auth.isLoggedIn;
  });
