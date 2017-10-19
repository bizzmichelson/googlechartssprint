myApp.service('dataService', ['$http', function($http) {
    console.log('data.service works');
    
    var rs = this;
    

    rs.postBasics = function(object) {
        console.log(object);
         $http({
             method: 'POST',
             url: '/basics',
             data: object
         }).then(function(response){
             console.log('in post basics', response);
         })
     
     }
    }])




  