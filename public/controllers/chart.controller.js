// var app = angular.module('app', ['chart.js']);

myApp.controller('ChartController', function() {
 
    console.log('in chart controller');
    var ctx = document.getElementById("myChart");
    console.log(ctx);
    var myChart = new Chart(ctx, {
           
        type: 'line',
        data: {
            labels: ["1991", "2000", "2005", "2010", "2015", "2017"],
            datasets: [{
                // label: '# of Votes',
                data: [5, 10, 3, 5, 2, 3],
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
            }]
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
    });
});

