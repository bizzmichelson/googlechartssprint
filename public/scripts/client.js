var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/basics', {
        templateUrl: 'views/basics.html',
        controller: 'BasicsController as bc'
    }).when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsController as ec'
    }).otherwise({ redirectTo: '/'});
    // }) .otherwise({ redirectTo: '/'});
});