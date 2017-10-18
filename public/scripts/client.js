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
        controller: 'HighController as hc'
    }).when('/addLow', {
        templateUrl: 'views/addLow.html',
        controller: 'LowController as lc'
    }).when('/addEvents', {
        templateUrl: 'views/addEvents.html',
        controller: 'addEventsController as ac'
    }).otherwise({ redirectTo: '/'});
});

// app.controller('BasicsController', function (BasicsService) {
//     var vm = this;
//     // vm.testThingy = 'This is only a test';
//     // vm.serviceTestThingy = PropertiesService.serviceMessage;
//     vm.rentalProperties = PropertiesService.rentalProperties;
//     PropertiesService.getRentalProperties();
// });

// app.service('BasicsService', function ($http) {
//     var self = this;
//     // self.serviceMessage = "This message brought to you by the service";
//     self.allProperties = { list: [] };
//     self.rentalProperties = {list: []};

//     self.getAllProperties = function () {
//         $http({
//             method: 'GET',
//             url: '/all'
//         }).then(function (response) {
//             self.allProperties.list = response.data;
//         })
//     }

//     self.getRentalProperties = function () {
//         $http({
//             method: 'GET',
//             url: '/rental'
//         }).then(function (response) {
//             self.rentalProperties.list = response.data;
//         })
//     }
// });