import HomeController from './HomeController';

let deps = [
  'ngRoute',
  'mobile-angular-ui'
];

angular.module('Home', deps)
  .controller('HomeController', HomeController);