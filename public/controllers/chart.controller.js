// angular.module('myApp',['chart.js']).controller('ChartController', function ($scope) {
  (function() {
    angular.module('myApp').controller('ChartController', ChartController);
 //passing service to controller
    ChartController.$inject = ['chart.js'];
  });
  
    // function ChartController(ChartService) {
    //   const $ctrl = this;
    //   ChartService.getChart()
    //     .then(function(response) {
    //       console.log('it worked?');
    // //       // The same as
    // //       // const data = response.data;
    // //       // just a shorter syntax.
    // //       const { data } = response;
    // //       return ($ctrl.listings = data);
    // //     })
    // //     .catch(function(err) {
    // //       // If you do a .then(), always do a .catch() after it, to handle errors.
    // //       return console.error('Error fetching data from database ', err);
    // //     });
    //  })
    // };










// var app = angular.module('app', ['chart.js']);
  


// app.controller('LineCtrl', function($scope) {
 
    
//     console.log('in chart controller');



    
    
//       $scope.labels = ["1991", "1995", "2000", "2010", "2015", "2020"],
//       $scope.series = ['Series A', 'Series B'];
//       $scope.data = [
//         [0, 5, 5, 2, 10, 8, 7],
//         [5, 5, 5, 5, 5]
//       ];
//       $scope.onClick = function (points, evt) {
//         console.log(points, evt);
//       };
//       $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
//       $scope.options = {
//         scales: {
//           yAxes: [
//             {
//               id: 'y-axis-1',
//               type: 'linear',
//               display: true,
//               position: 'left'
//             },
//             {
//               id: 'y-axis-2',
//               type: 'linear',
//               display: true,
//               position: 'right'
//             }
//           ]
//         }
//       };
//     });


