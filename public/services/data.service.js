myApp.service('dataService', ['$http', '$location', function($http, $location) {
    console.log('data.service works');
    
    var ds = this;
    

    ds.postBasics = function(HighLowObject) {
        console.log(HighLowObject);
         $http({
             method: 'POST',
             url: '/api/basics',
             data: HighLowObject
         }).then(function(response) {
            console.log('server response')
            console.log($location.path())
            $location.path('/events') 
            }).catch(function(error){
              console.error(error);
            });
          
     
     }

     ds.postEvents = function(eventsObject) {
         console.log(eventsObject);
         $http({
             method: 'POST', 
             url: '/api/events',
             data: eventsObject
         }).then(function(response){
            console.log($location.path())            
            $location.path('/chart') 
        }).catch(function(error){
          console.error(error);
        });
     }

     // Maybe eventsObject should have a different name??? 
     ds.getEvents = function() {
        console.log();
        return $http({
            method: 'GET', 
            url: '/api/chart',
        })
    }

    // this.getEvents = function(eventId) {
    //     if (eventId !== undefined) {
    //         $http.get("http://localhost:5000/chart").then(function (response){
    //             console.log("all events", response);
    //         })
    //     }
    // }

    }])




  