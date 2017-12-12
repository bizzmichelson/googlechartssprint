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
    }).when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartController as cc'
    }).when('/options', {
        templateUrl: 'views/options.html',
        controller: 'OptionsController as oc'
    }).when('/addHigh', {
        templateUrl: 'views/addHigh.html',
        controller: 'HighController as gc'
    }).when('/addLow', {
        templateUrl: 'views/addLow.html',
        controller: 'LowController as lc'
    }).when('/addEvents', {
        templateUrl: 'views/addEvents.html',
        controller: 'addEventsController as ac'
    }).otherwise({ redirectTo: '/'});
});

