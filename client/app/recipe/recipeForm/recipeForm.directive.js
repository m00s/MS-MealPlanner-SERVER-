'use strict';

angular.module('msMealPlannerApp')
  .directive('recipeForm', function (Recipe) {
    return {
      templateUrl: 'app/recipe/recipeForm/recipeForm.html',
      restrict: 'EA',
      scope: {
      },
      link: function (scope) {
        scope.types = ['antipasto','primo','secondo','contorno','dessert'];
        scope.difficulty = ['easy','medium','hard'];
        scope.prices = ['low','medium','high'];
        scope.ingredients = [];
        scope.ingredient = {};

        scope.addIngredient = function() {
          scope.ingredients.push(currentIngredient());
          resetCurrentIngredient();
        };

        scope.removeIngredient = function (ing) {
          _.remove(scope.ingredients, ing);
        };

        function currentIngredient() {
          return {
            'name': scope.ingredient.name,
            'qta': scope.ingredient.qta
          };
        }

        function resetCurrentIngredient() {
          scope.ingredient.name = scope.ingredient.qta = '';
        }

        scope.addRecipe = function() {
          // TODO to restangularize a recipe obj to send the POST

          scope.recipe.ingredients = scope.ingredients;
          Recipe.post(scope.recipe).then(function(data){
            console.log('added\n', angular.toJson(data));
          });
          console.log('Recipe added');
        };
      }
    };
  });
