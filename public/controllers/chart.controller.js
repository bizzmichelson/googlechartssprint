myApp.controller('ChartController', function(dataService) {
  var vm = this;
  var resObj = [];

  console.log(dataService);

  console.log('in chart controller');

  dataService.getEvents().then(function(response) {
    console.log(response.data);
    // console.log("res.Obj", resObj);
    vm.resObj = response.data;
    // return vm.resObj;
    vm.resObj.sort(function(a, b) {
      return parseFloat(a.date) - parseFloat(b.date);
    });
    console.log('vm.resObj', vm.resObj);
    drawLineChart(vm.resObj);
    console.log('vm.resObj', vm.resObj);
  });

  var drawLineChart = function(newObj) {
    var ctx = document.getElementById('myChart');
    console.log(ctx);

   var pointTypes =  newObj.map(function(object) {
      return object.point_type;
    });

    var Labels =  newObj.map(function(object) {
        return [object.description, object.date];
      });
    console.log(pointTypes);
    console.log(Labels);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Labels,
        datasets: [
          {
            data: pointTypes,

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },

      options: {
        legend: {
          display: false
        },

        responsive: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };
});
