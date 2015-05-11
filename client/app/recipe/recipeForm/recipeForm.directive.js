'use strict';

angular.module('msMealPlannerApp')
  .directive('recipeForm', ['Recipe', 'growl', recipeForm ]);

function recipeForm(Recipe, growl) {
  var directive = {
    templateUrl: 'app/recipe/recipeForm/recipeForm.html',
    restrict: 'EA',
    scope: {
      title: '@',
      recipe: '=',
      edit: '@'
    },
    link: link
  };

  return directive;

  function link(scope, elem, attr) {
    if(!attr.recipe)
      scope.recipe = {};

    function init() {
      scope.title = attr.title || 'Recipe';
      scope.buttonText = attr.edit ? 'Update recipe' : 'Add recipe';
      scope.types = ['antipasto','primo','secondo','contorno','dessert'];
      scope.difficulty = ['easy','medium','hard'];
      scope.prices = ['low','medium','high'];
      scope.ingredient = {};
    }

    function currentIngredient() {
      return {
        'name': scope.ingredient.name,
        'qta': scope.ingredient.qta
      };
    }

    function resetCurrentIngredient() {
      scope.recipe.ingredients.name = scope.recipe.ingredients.qta = '';
    }

    scope.addIngredient = function() {
      scope.recipe.ingredients.push(currentIngredient());
      resetCurrentIngredient();
    };

    scope.removeIngredient = function (ing) {
      _.remove(scope.recipe.ingredients, ing);
    };

    scope.updateRecipe = function() {
      scope.recipe.put().then(
        function() {
          growl.success("Recipe updated.  <a href='\'>Back to Home</a>");
        },function() {
          growl.error('Unable to update the recipe. Try again later.');
        }
      );
    };

    scope.addRecipe = function() {
      Recipe.post(scope.recipe).then(
        function() {
          growl.success("Recipe created.  <a href='\'>Back to Home</a>");
        },function() {
          growl.error('Unable to create the recipe. Try again later.');
        }
      );
    };

    init();

  }
}
