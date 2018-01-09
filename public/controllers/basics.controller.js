 myApp.controller('BasicsController', function ($http, dataService) {
   var vm = this;

   vm.click = function () {
     console.log('BasicsController', vm.input);

    //  var newIntake = {
    //    description: vm.born,
    //    description: vm.basicHighDesc,
    //    date: vm.basicHighYear,
    //    description: vm.basicLowDescription,
    //    date: vm.basicLowYear,
    //  }
    //  if (
    //    newIntake.born == null ||
    //    newIntake.basicHighDesc == null  ||
    //    newIntake.basicHighYear == null  ||
    //    newIntake.basicLowDesc == null  ||
    //    newIntake.basicLowYear == null )
    //  {
    //      swal({
    //      title: 'Please complete all required fields.',
    //      icon: "warning",
    //      width: 600,
    //      padding: 100,
    //      background: '#fff url(assets/page.JPG)'
    //    })
    //  } else {
    //   //  console.log('newIntake', newIntake);
    //    swal({
    //      title: 'Required fields submitted to database.',
    //      icon: "success",
    //      width: 600,
    //      padding: 100,
    //      background: '#fff url(assets/page.JPG)'
    //    }).then(function () {
         dataService.postBasics(vm.input);
  //      });
     }
  //  };


 });