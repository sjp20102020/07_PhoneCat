'use strict';

var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers', 'phonecatFilters', 'phonecatServices']);

phonecatApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when(
        '/phones',
        {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }
    ).when(
        '/phones/:sjpphoneId',
        {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'

        }
    ).otherwise(
        {redirectTo: '/phones'}
    );

}]);

