/**
 * App
 */

import './components/Components';
import './router/Router';
import './auth/Auth';

let deps = [
  'Auth',
  'Router',
  'I12Components'
];

angular.module('I12Core', deps);