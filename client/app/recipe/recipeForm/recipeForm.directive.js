'use strict';

angular.module('msMealPlannerApp')
  .directive('recipeForm', function () {
    return {
      templateUrl: 'app/recipe/recipeForm/recipeForm.html',
      restrict: 'EA',
      scope: {
        recipe: '='
      },
      link: function (scope) {
        // TODO need an addRecipe() method

        scope.types = ['antipasto','primo','secondo','contorno','dessert'];

        scope.addRecipe = function() {
          // TODO to restangularize a recipe obj to send the POST
          console.log('Implement me');
        };
      }
    };
  });
