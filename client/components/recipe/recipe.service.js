'use strict';

angular.module('msMealPlannerApp.recipe', ['ngResource'])
  .factory('Recipe', function ($resource) {
    return $resource('/api/recipes/:id/:controller', {
        id: '@_id'
      },
      {
        changePassword: {
          method: 'PUT',
          params: {
            controller:'password'
          }
        },
        get: {
          method: 'GET',
          params: {
            id:'me'
          }
        }
      });
  });
