myApp.controller('EventsController', function($http, dataService) {
  var vm = this;
  
      vm.clicky = function (){
        vm.eventsObject = {
          eventsOneDesc: vm.sigEventOneDescIn,
          eventsOneYear: vm.sigEventOneYearIn, 
          eventsTwoDesc: vm.sigEventTwoDescIn, 
          eventsTwoYear: vm.sigEventTwoYearIn
      }
      console.log('Events', vm.eventsObject);
      
      dataService.postEvents(vm.eventsObject);
    
    //not sure if should be resObj
    //something is wrong here
    //the problem is here

      dataService.getEvents(resObj).then(function(response){
      vm.resObj = response.data;
      }).catch(function(err){
      return console.error(err);
  })  
}

  
});