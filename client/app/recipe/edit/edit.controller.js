'use strict';

angular.module('msMealPlannerApp')
  .controller('EditCtrl', function ($scope, $stateParams, Recipe) {

    $scope.recipe = {};

    Recipe.one($stateParams.id).get().then(function(data){
      $scope.recipe = data;
      console.log('$scope.recipe:',$scope.recipe);
    }, function(err){
      console.log('Error:', err);
    });

  });
