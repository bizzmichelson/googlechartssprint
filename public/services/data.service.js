myApp.service('dataService', ['$http', function($http) {
    console.log('data.service works');
    
    var ds = this;
    

    ds.postBasics = function(object) {
        console.log(object);
         $http({
             method: 'POST',
             url: '/basics',
             data: object
         }).then(function(response){
             console.log('in post basics', response);
         })
     
     }

     ds.postEvents = function(eventsObject) {
         console.log(eventsObject);
         $http({
             method: 'POST', 
             url: '/events',
             data: eventsObject
         }).then(function(response){
             console.log('in post events', response);
         })
     }

     // Maybe eventsObject should have a different name??? 
     ds.getEvents = function(resObj) {
        console.log(resObj);
        $http({
            method: 'GET', 
            url: '/',
            //I am not sure if this is the correct url
        }).then(function(response){
            console.log('in get basics', response);
            return response.data;
        })
    }


    //  function addData(chart, label, data) {
    //     chart.data.labels.push(label);
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.push(data);
    //     });
    //     chart.update();
    // }
    }])




  