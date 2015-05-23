/**
 * This module defines application routes
 */


let deps = [
  'ngRoute'
];

angular.module('Router', deps)
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/home/home.html'
      })
      .when('/login', {
        templateUrl: 'js/auth/login.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);