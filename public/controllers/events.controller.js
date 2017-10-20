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
    
    }
  
  
  });