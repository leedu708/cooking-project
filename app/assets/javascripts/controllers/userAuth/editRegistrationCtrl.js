cooking.controller('editRegistrationCtrl',
  ['$scope', '$location', '$window', 'user', 'userAuthService',
  function($scope, $location, $window, user, userAuthService) {

    $scope.init = function() {
      $scope.creds = {};
      $scope.creds.email = user.email;
    };

    $scope.update = function(creds) {
      console.log(creds);
      userAuthService.edit(creds).then(function() {
        $window.location.reload();
        $location.path( '/home' );
      });
    };

    $scope.init();
  }]);