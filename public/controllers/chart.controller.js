myApp.controller('ChartController', function(dataService) {
    var vm = this;
    var resObj = [];
    console.log(dataService);
    
    console.log('in chart controller');
    dataService.getEvents().then(function(response){
        console.log(response.data);
        // console.log("res.Obj", resObj);
       
            // return console.error('Error fetching data from database ', err);
        vm.resObj = response.data;  
        // return vm.resObj;
        drawLineChart(resObj);
        
        })
       
        // return resObj;
        // .then(function() {
        //     drawLineChart()
            
    // });

    //   .then drawVisualization().


var drawLineChart = function(resObj) {

    var ctx = document.getElementById("myChart");    
    console.log(ctx);
    var myChart = new Chart(ctx, {
           
        type: 'line',
        data: {
            labels: [vm.resObj[0].born, "2000, high", "2005, low", "2010", "2015", "2017"],
            datasets: [
                {
                // label: '# of Votes',
                data: [0, resObj.basicHighDesc, 10, 5],
                // label: ["born", "wedding"],
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
            },]
            
        },
        options: {
            responsive: false,            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    })
}
// drawLineChart();
});




