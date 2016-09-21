/*var customerApp = angular.module('customerApp', []);

customerApp.controller('CustomersController',function($scope) {

    $scope.sortBy   = 'name';
    $scope.reverse  = false;

    $scope.customers = [
        { name: 'Adele',city: 'Yangon',orderTotal: 63.4,joined: '2002-11-08'},
        { name: 'Buddy',city: 'Mandalay',orderTotal: 633.4,joined: '2002-10-08'},
        { name: 'Celin',city: 'Bagan',orderTotal: 333.4,joined: '2002-01-08'},
        { name: 'Eladge',city: 'Taunggyi',orderTotal: 553.4,joined: '2002-04-08'},
        { name: 'Frank',city: 'Myitkyinar',orderTotal: 23.4,joined: '2002-05-08'},
    ];

    $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = ! $scope.reverse;
    }

});

*/

//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'templates/add_order.html',
        controller: 'AddOrderController'
    }).
      when('/ShowOrders', {
        templateUrl: 'templates/show_orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);


sampleApp.controller('AddOrderController', function($scope) {
    
    $scope.message = 'This is Add new order screen';
    
});


sampleApp.controller('ShowOrdersController', function($scope) {

    $scope.message = 'This is Show orders screen';

});