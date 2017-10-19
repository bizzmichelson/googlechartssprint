myApp.service('dataService', ['$http',function($http) {
    console.log('data.service works');
    
    var rs = this;
    

    rs.postBasics = function() {
        console.log('postbasics start');
         $http({
             method: 'POST',
             url: '/basics',
             data: {
                 born: bc.bornIn, 
                 basicHighDesc: bc.basicHighDescriptionIn,
                 basicHighYear: bc.basicHighYearIn, 
                 basicLowDesc: bc.basicLowDescriptionIn, 
                 basicLowYear: bc.basicLowYearIn
             }
         }).then(function(response){
             console.log('in post basics', response);
         })
     
     }
    }])


    //     };
    //     // var to hold value from form
      
    //     console.log("addTasks", itemToAdd);
      
        // var to holding data we want to send to the server
      
    //     $.ajax({
    //       type: "POST",
    //       url: "/todo/add",
    //       data: itemToAdd,
    //       success: function() {
    //         //change background in here? something with td
    //         //need something else
    //         return getTasks();
    //       }
    //     });
    //   }

    // console.log('data service');

  
    // rs.getSales = function() {
    //     return $http({
    //         method: 'GET',
    //         url: '/properties/sale'
    //     })
    // }

  