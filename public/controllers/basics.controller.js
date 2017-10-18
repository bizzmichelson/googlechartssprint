myApp.controller('BasicsController', function($scope, calculateService) {
  console.log('in basics controller');  
    $scope.quantity=1;
    $scope.quantityResult = 0;
  
    $scope.calculateQuantity = function() {
      $scope.quantityResult = calculateService.calculate($scope.quantity, 10);
    };
  });
