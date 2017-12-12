myApp.controller('ChartController', function (dataService) {
  var vm = this;
  var resObj = [];

  console.log(dataService);

  console.log('in chart controller');

  dataService.getEvents().then(function (response) {
    console.log(response.data);
    // console.log("res.Obj", resObj);
    vm.resObj = response.data;
    // return vm.resObj;
    vm.resObj.sort(function (a, b) {
      return parseFloat(a.date) - parseFloat(b.date);
    });
    console.log('vm.resObj', vm.resObj);
    drawLineChart(vm.resObj);
    console.log('vm.resObj', vm.resObj);
  });

  var drawLineChart = function (newObj) {
    var ctx = document.getElementById('myChart');
    console.log("ctx", ctx);

    var pointTypes = newObj.map(function (object) {
      return object.point_type;
    });

    var Labels = newObj.map(function (object) {
      return [object.description, object.date];
    });
    console.log(pointTypes);
    console.log(Labels);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Labels,
        datasets: [{
          data: pointTypes,

          backgroundColor: [
            'rgba(124,252,0,0.2)'
          ],
          borderColor: [
            'rgba(0,255,0,0.2'
          ],
          borderWidth: 1
        }]
      },

      options: {
        
        legend: {
          display: false
        },
          
        responsive: false,
        scales: {
          gridLines : {
            display : false
          },
          xAxes: [{
            gridLines: {
                display: false
            }  
        }],
          yAxes: [{
            gridLines : {
              display : false
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  };
});