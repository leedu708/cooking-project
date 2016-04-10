cooking.controller('newRegistrationCtrl',
  ['$scope', '$location', '$window', 'userAuthService',
  function($scope, $location, $window, userAuthService) {

    $scope.init = function() {

    };

    $scope.register = function(creds) {
      userAuthService.register(creds).then(function(user) {
        var loginInfo = {};
        loginInfo.email = creds.email;
        loginInfo.password = creds.password;
        userAuthService.login(creds).then(function() {
          $window.location.reload();
          $location.path( '/home' );
        });
      });
    };

    $scope.init();

  }]);