var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/'
    }).when('/basics', {
        templateUrl: 'views/basics.html',
        controller: 'BasicsController as bc'
    // } ).when('/gandalf', {
    //     templateUrl: 'views/gandalf.html',
    //     controller: 'GandalfController as gc'
    // }).when('/gimli', {
    //     templateUrl: 'views/gimli.html',
    //     controller: 'GimliController as ic'
    }) .otherwise({ redirectTo: '/'});
});