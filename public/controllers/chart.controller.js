myApp.controller('ChartController', function(dataService) {
    var vm = this;
    var resObj = [];
    
    // var roots = numbers.map(Math.sqrt);

    // var fruit = ['cherries', 'apples', 'bananas'];
    // fruit.sort(); // ['apples', 'bananas', 'cherries']
    console.log(dataService);
    
    console.log('in chart controller');
    dataService.getEvents().then(function(response){
        console.log(response.data);
        // console.log("res.Obj", resObj);
        vm.resObj = response.data;  
        // return vm.resObj;
        vm.resObj.sort(function(a,b){
            return parseFloat(a.date)-parseFloat(b.date);
        });        
        console.log("vm.resObj", vm.resObj);           
        drawLineChart(resObj);
        console.log('vm.resObj', vm.resObj)
        })
       
var drawLineChart = function(resObj) {

    var ctx = document.getElementById("myChart");    
    console.log(ctx);
    var myChart = new Chart(ctx, {
           
        type: 'line',
        data: {
            labels:[[vm.resObj[0].description, vm.resObj[0].date], [vm.resObj[1].description,vm.resObj[1].date], [vm.resObj[2].description,vm.resObj[2].date]],                 
            datasets: [
                {
                // label: '# of Votes',
                data: [vm.resObj[0].point_type, vm.resObj[1].point_type, vm.resObj[2].point_type],
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
                legend: {
                   display: false
                },
       
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
});




