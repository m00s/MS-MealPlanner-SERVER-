'use strict';

angular.module('msMealPlannerApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.recipes = [];

    $http.get('/api/recipes').success(function(awesomeThings) {
      $scope.recipes = awesomeThings;
    });

    $scope.addRecipe = function() {
      if($scope.newRecipe === '') {
        return;
      }
      $http.post('/api/recipes', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/recipes/' + thing._id);
    };
  });
