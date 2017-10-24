myApp.controller('EventsController', function($http, dataService) {
  var vm = this;
  
      vm.clicky = function (){
        dataService.postEvents(vm.input)
      };  
});