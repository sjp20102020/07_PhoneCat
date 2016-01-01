'use strict';

/* Controllers */

/*A Note on Minification

 Since Angular infers the controller's dependencies from the names of arguments to the controller's constructor function,
 if you were to minify the JavaScript code for PhoneListCtrl controller, all of its function arguments would be minified as well,
 and the dependency injector would not be able to identify services correctly.

 We can overcome this problem by annotating the function with the names of the dependencies,
 provided as strings, which will not get minified. There are two ways to provide these injection annotations:
 */

/*

//2nd method - injection annotations - to work with minified javascript code
* function PhoneListCtrl($scope, $http) {...}
 PhoneListCtrl.$inject = ['$scope', '$http'];
 phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);

 */

var phonecatApp = angular.module('phonecatApp', []);

/*
1 Method - injection annotations - to work with minified javascript code
* */
phonecatApp.controller('PhoneListCtrl', ['$scope','$http',function ($scope, $http) {
  /*  $scope.phones = [
        {
            name: 'Nexus s',
            snippet: 'Nexus s is Fast',
            age: 2
        },
        {
            name: 'Galaxy S6',
            snippet: 'Galaxu S6 is brilliant',
            age: 3
        },
        {
            name: 'Iphone 6',
            snippet: 'Iphone 6 perfect',
            age: 1
        },
        {
            name: 'Nexus Bs',
            snippet: 'Nexus BS is cool',
            age: 4
        }

    ];
*/
    $scope.sjpOrder = 'age';

    $http({method: 'GET', url: '/app/phones/phones.json'}).
        then(
        function successCallBk(response) {
            console.log(response.data);
            $scope.phones = response.data;
        }, function errorCallBk(response) {
            console.log(response);
        });


}]);

