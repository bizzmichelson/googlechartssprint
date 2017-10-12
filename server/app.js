var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.listen(port, function () {
  console.log('localhost running on port', port);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// (function () {
//   'use strict';

//   var app = angular.module('examples', ['chart.js', 'ui.bootstrap']);

//   app.config(function (ChartJsProvider) {
//     // Configure all charts
//     ChartJsProvider.setOptions({
//       colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
//     });
//     // Configure all doughnut charts
//     ChartJsProvider.setOptions('doughnut', {
//       cutoutPercentage: 60
//     });
//     ChartJsProvider.setOptions('bubble', {
//       tooltips: { enabled: false }
//     });
//   });