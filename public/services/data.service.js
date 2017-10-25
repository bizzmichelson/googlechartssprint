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
            $location.path('/chart') 
            }).catch(function(error){
              console.error(error);
            });
        }

   ds.postEvents = function(eventsObject) {
        console.log(eventsObject);
         $http({
             method: 'POST',
             url: '/api/addEvents',
             data: eventsObject
         }).then(function(response) {
            console.log('server response')
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


    // vm.objForStuff = dataService.objForStuff;
    // vm.dataService = dataService;
    
   
    // console.log(dataService);
    
    // console.log('in chart controller');
    // //should I add .getSigs here or try to retrieve significant events on getEvents?
    //         vm.dataService.getEvents().then(function(response){
    //         console.log(response.data);
    //         // console.log("res.Obj", resObj);
    //         vm.resObj = response.data;  
    //         // return vm.resObj;
    //         vm.resObj.sort(function(a,b){
    //             return parseFloat(a.date)-parseFloat(b.date);
    //         });        
    //         console.log("vm.resObj", vm.resObj);           
    //         drawLineChart(resObj);
    //         console.log('vm.resObj', vm.resObj)
    //         })

    // ds.getSigs = function() {
    //     console.log();
    //     return $http({
    //         method: 'GET', 
    //         url: '/api/charttwo',
    //     })
    // }

 
    }]);





  