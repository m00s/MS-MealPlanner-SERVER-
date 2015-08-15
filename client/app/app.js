'use strict';

angular
  .module('msMealPlannerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'angular-growl',
    'msMealPlannerApp.recipe',
    'msMealPlannerApp.navbar',
    'msMealPlannerApp.footer',
    'msMealPlannerApp.account',
    'msMealPlannerApp.admin',
    'msMealPlannerApp.mongoose',
    'msMealPlannerApp.calendar'
  ])
  .config(Configuration)
  .constant({
    templates: {
      'navbar': 'components/navbar/navbar.html',
      'footer': 'components/footer/footer.html',
      'eventModal': 'app/event/modal/modal.html'
    }
  })
  .run(run);


Configuration.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'growlProvider'];

function Configuration($urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, growlProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('authInterceptor');
  RestangularProvider.setBaseUrl('api');
  RestangularProvider.setRestangularFields({id: '_id'});

  growlProvider.onlyUniqueMessages(true);
  growlProvider.globalTimeToLive(5000);
  growlProvider.globalDisableCountDown(true);
  growlProvider.globalPosition('top-center');
}

run.$inject = ['$rootScope', '$location', 'Auth'];

function run($rootScope, $location, Auth) {
  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$stateChangeStart', function (event, next) {
    Auth.isLoggedInAsync(function(loggedIn) {
      if (next.authenticate && !loggedIn) {
        $location.path('/login');
      }
    });
  });
}
