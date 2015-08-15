'use strict';

angular
  .module('msMealPlannerApp')
  .controller('EditCtrl', EditCtrl);

EditCtrl.$inject = ['$stateParams', 'Recipe'];

function EditCtrl($stateParams, Recipe) {

  var vm = this;

  vm.recipe = {};

  Recipe.one($stateParams.id).get().then(function(data){
    vm.recipe = data;
    console.log('vm.recipe:',vm.recipe);
  }, function(err){
    console.log('Error:', err);
  });
}
