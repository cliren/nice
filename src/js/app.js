/**
 * App
 */

import './components/Components';
import './router/Router';

let deps = [
    'Router',
    'I12Components'
];

angular.module('I12Core', deps);