myApp.controller('addEventsController', function($http, dataService) {
  var vm = this;
  
  vm.clicky = function (){
    dataService.postEvents(vm.input)
  };  
    console.log('in addEvents controller');
  });