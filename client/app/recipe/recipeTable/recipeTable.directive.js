'use strict';

angular.module('msMealPlannerApp')
  .directive('recipeTable', ['Recipe', 'growl', function (Recipe, growl) {
    return {
      templateUrl: 'app/recipe/recipeTable/recipeTable.html',
      restrict: 'EA',
      link: function (scope) {

        function removeValue (array, id) {
          return _.reject(array, function(item) {
            console.log('deleted:', id);
            return item._id === id;
          });
        }

        function fetchData (){
          return Recipe.getList()
            .then(function(data){
              scope.recipeCollection = data;
            });
        }

        scope.deleteRecipe = function(recipe) {
          if(window.confirm('Are you sure you want to remove this recipe?')){
            recipe.remove().then(function(){
              scope.recipeCollection = removeValue(scope.recipeCollection, recipe._id);
              growl.success('Successfully deleted');
            }, function() {
              growl.error('Unable to delete. Try again later..');
            });
          }
        };

        var init = function(){
          scope.recipeCollection = [];
          fetchData();
        };

        init();
      }
    };
  }]);
