'use strict';

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource', function ($resource) {
    return $resource('phones/:phoneId.json', {}, {
        query2: {method: 'GET', params: {phoneId: 'phones'}, isArray: true},
        get : {method: 'GET', params : {phoneId:'motorola-xoom-with-wi-fi'}}
    });


    //return $resource('phones/phones.json');
}]);