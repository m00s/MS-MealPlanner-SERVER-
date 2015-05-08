'use strict';

angular.module('msMealPlannerApp')
  .directive('recipeForm', ['Recipe', '$location', 'growl', function (Recipe, $location, growl) {
    return {
      templateUrl: 'app/recipe/recipeForm/recipeForm.html',
      restrict: 'EA',
      scope: {
        title: '@',
        recipe: '=',
        edit: '@'
      },
      link: function (scope, elem, attr) {
        if(!attr.recipe)
          scope.recipe = {};

        scope.title = attr.title | 'Recipe';

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
          scope.recipe.ingredients = scope.ingredients;
          Recipe.post(scope.recipe).then(function(data){
            growl.success("Recipe created.  <a href='\'>Back to Home</a>");
          });
        };
      }
    };
  }]);
