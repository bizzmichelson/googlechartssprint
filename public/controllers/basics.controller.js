 myApp.controller('BasicsController', function($http, dataService){
    var vm = this;

    vm.click = function (){
      vm.object = {
        born: vm.bornIn, 
        basicHighDesc: vm.basicHighDescriptionIn,
        basicHighYear: vm.basicHighYearIn, 
        basicLowDesc: vm.basicLowDescriptionIn, 
        basicLowYear: vm.basicLowYearIn
    }
    console.log('BasicsController', vm.object);
    
    dataService.postBasics(vm.object);
  
  }


});
