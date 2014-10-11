'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

.factory('Show', ['$resource', function($resource){
  return $resource('/api/shows/:_id');
}]);


