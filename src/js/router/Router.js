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
      .otherwise({
        redirectTo: '/'
      });
  }]);