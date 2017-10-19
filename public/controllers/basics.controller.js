// myApp.controller('BasicsController', function() {
//   console.log('in basics controller');  
//   myFunc(console.log('click'));
//   });
 myApp.controller('BasicsController', function($http, dataService){
    var vm = this;
    // dataService.postBasics().then(function(req){
    //     vm.born = req.body.data;
    //     //does this need to be req.body.data?
    //     return console.log('posting birth', vm.born);

    // }).catch(function(err){
    //     return console.error(err);
    // })
    console.log('BasicsController');

  dataService.postBasics();
    //need to grab additional items such as vm.handfulOfRent = listingService.rentStuff; ??


});
