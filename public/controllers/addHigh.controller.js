  myApp.controller('HighController', function ($http, dataService) {
        var vm = this;
        var resObj = [];

        console.log(dataService);

        console.log('in high controller');

        dataService.getEvents().then(function (response) {
          console.log(response.data);
          // console.log("res.Obj", resObj);
          vm.resObj = response.data;
          // return vm.resObj;

          vm.resObj.sort(function (a, b) {
            return parseFloat(a.date) - parseFloat(b.date);
          });
          console.log('vm.resObj', vm.resObj);
        });

        vm.clicker = function (id) {
          console.log("inside clicker");

          dataService.deleteItems(id).then(function (response) {
            console.log(response.data);

            vm.resObj.splice(vm.resObj.findIndex(function (object){
              return object.id === id;
               }), 1)
          });

          // var pointTypes = vm.resObj.map(function (object) {
          //     return object;

              // vm.resObj.find(: id);

              // function completeItems(id) {
              //   var updatedItem;
              //   for (var i = 0; i < tasks.length; i++) {
              //     var taskItem = tasks[i];
              //     if (taskItem.id === id) {
              //       updatedItem = taskItem;
              //       break;
              //     }
              //   }
              //   updatedItem.complete = !updatedItem.complete;

              // });

          }

        });