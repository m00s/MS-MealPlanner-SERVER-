'use strict';

angular.module('msMealPlannerApp')
  .controller('EditCtrl', function ($scope, $stateParams, Recipe) {
    console.log('$stateParams.id:',$stateParams.id);
    Recipe.one($stateParams.id).get().then(function(data){
      $scope.recipe = data;
    }, function(err){
      console.log('Error:', err);
    });

    $scope.$watch('recipe', function(newV, oldV) {
      if(newV !== oldV) {
        console.log('Changed');
      }
    }, true);

  });
