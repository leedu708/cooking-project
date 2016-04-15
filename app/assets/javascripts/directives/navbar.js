cooking.directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/shared/navbar.html',
    scope: [],
    controller: ['$scope','$window', function($scope, $window) {
      $scope.width = $window.innerWidth;

      angular.element($window).bind('resize', function() {
        $scope.width = $window.innerWidth;
        $scope.$digest();
      });

      $scope.$on('$stateChangeSuccess', function(event, to) {
        if (to.name.match(/dashboard/)) {
          $scope.onDash = true;
        } else {
          $scope.onDash = false;
        };
      });
      
    }]
  }
})