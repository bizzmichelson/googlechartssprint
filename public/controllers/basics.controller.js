 myApp.controller('BasicsController', function($http, dataService){
    var vm = this;

    vm.click = function (){
    console.log('BasicsController', vm.input);
    
    dataService.postBasics(vm.input)
  };


});
