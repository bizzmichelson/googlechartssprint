 myApp.controller('BasicsController', function ($http, dataService) {
   var vm = this;

   vm.click = function () {
     console.log('BasicsController', vm.input);

     var newIntake = {
       description: vm.input.born,
       description: vm.input.basicHighDesc,
       date: vm.input.basicHighYear,
       description: vm.input.basicLowDescription,
       date: vm.input.basicLowYear,
     }
     basicHighDesc
     :
     "sdg"
     basicHighYear
     :
     2012
     basicLowDesc
     :
     "dsgsgg"
     basicLowYear
     :
     2011
     born
     :
     1991

     if (
       newIntake.input.born == '' ||
       newIntake.input.basicHighDescription == '' ||
       newIntake.basicHighYear == '' ||
       newIntake.input.basicLowDescription == '' ||
       newIntake.input.basicLowYear == ''
     ) {
       swal({
         title: 'Please complete all required fields.',
         icon: "warning",
         width: 600,
         padding: 100,
         background: '#fff url(assets/page.JPG)'
       })
     } else {
       console.log('newIntake', newIntake);
       swal({
         title: 'Required fields submitted to database.',
         icon: "success",
         width: 600,
         padding: 100,
         background: '#fff url(assets/page.JPG)'
       }).then(function () {
         dataService.postBasics(vm.input);
       });
     }
   };


 });