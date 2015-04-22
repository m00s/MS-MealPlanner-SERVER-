'use strict';

angular.module('msMealPlannerApp')
  .directive('recipeTable', ['Recipe', function (Recipe) {
    return {
      templateUrl: 'app/recipe/recipeTable/recipeTable.html',
      restrict: 'EA',
      link: function (scope) {
        scope.deleteRecipe = function(recipe) {
          recipe.remove();
        };

        var init = function(){
          scope.recipeCollection = [];
          Recipe.getList()
            .then(function(data){
              scope.recipeCollection = data;
            });
        };

        init();
      }
    };
  }]);
