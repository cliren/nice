import LoginController from './LoginController';

let deps = [
  'satellizer'
];

angular.module('Auth', deps)
  .controller('LoginController', LoginController)
  .config(['$authProvider', ($authProvider)=> {
    $authProvider.google({
      clientId: '707918101083-qn27sumccvgg59sodho78asdo9mdb3mv.apps.googleusercontent.com',
      url: '/auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      display: 'popup',
      type: '2.0'
    });
  }]);