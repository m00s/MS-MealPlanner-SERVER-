'use strict';

angular.module('msMealPlannerApp.navbar', [
  'msMealPlannerApp.auth'
])
  .directive('msNavbar', function ($location, templates, Auth) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: templates.navbar,
      link: function(scope) {
        scope.menu = [
          {
            title: 'Add recipe',
            link: '/new'
          }
        ];

        scope.isCollapsed = true;
        scope.isLoggedIn = Auth.isLoggedIn;
        scope.isAdmin = Auth.isAdmin;
        scope.getCurrentUser = Auth.getCurrentUser;

        scope.logout = function() {
          Auth.logout();
          $location.path('/login');
        };

        scope.isActive = function(route) {
          return route === $location.path();
        };
      }
    }
  });
