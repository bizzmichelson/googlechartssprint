myApp.controller('EventsController', function($http, dataService) {
  var vm = this;
  
      vm.clicky = function (){
        dataService.postEvents(vm.input)
      };
      // console.log('Events', vm.input);
      
      
    
    //not sure if should be resObj
    //something is wrong here
    //the problem is here

      // dataService.getEvents(resObj).then(function(response){
      // vm.resObj = response.data;
      // }).catch(function(err){
      // return console.error(err);
  // })  

  
});