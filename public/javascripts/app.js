
(function() { "use strict";

angular.module('MyApp', [
  'ngCookies', 'ngResource', 'ngMessages',
  'ngRoute', 'mgcrea.ngStrap'
])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'MainCtrl'
    })
    .when('/shows/:id', {
      templateUrl: 'partials/detail.html',
      controller: 'DetailCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: 'SignupCtrl'
    })
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'AddCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

}]);

}());
