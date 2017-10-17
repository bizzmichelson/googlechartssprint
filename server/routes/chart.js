// var myApp = angular.module('myModule', ['chart.js']);

// var express = require("express");
// var router = express.Router();
// var pool = require("../modules/pool");
// var pg = require('pg');
// var saleSchema = require('../models/rentModel');


// var saleModel = mongoose.model('listing', saleSchema);

// router.get('/', function(req, res){
//     console.log('/sale gotten');
//     // Sales.find({cost:{$exists:true}}).then(function(data) {
//     //     res.send(data);
//     // }).catch(function(err){
//     //     console.log(err);
//     //     res.sendStatus(404);
//     // })
// });

// module.exports = router;


angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {
    
      $scope.labels = ["1991", "1995", "2000", "2010", "2015", "2020"],
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [0, 5, 5, 2, 10, 8, 7],
        [5, 5, 5, 5, 5]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      $scope.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      };
    });

