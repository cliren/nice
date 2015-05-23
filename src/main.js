import './vendor/vendor'
import './less/main.less';
import './js/App';

let configureRoutes = (app)=> {
  app.run(['$route', function($route) {
    $route.reload();
  }]);
};

let startApp = ()=> {
  let app = angular.module('I12App', ['I12Core']);

  configureRoutes(app);
};

startApp();
