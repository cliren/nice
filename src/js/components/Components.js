/**
 * Application components
 */

import './home/Home';
import './navbar/Navbar';

let deps = [
  'Home',
  'Navbar'
];

angular.module('I12Components', deps);