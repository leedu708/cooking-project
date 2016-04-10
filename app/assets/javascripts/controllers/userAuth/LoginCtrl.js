cooking.controller('LoginCtrl',
  ['$scope', 'Auth', '$location', '$window', 'userAuthService',
  function($scope, Auth, $location, $window, userAuthService) {

    $scope.init = function() {
      userAuthService.getCurrentUser().then(function(user) {
        $scope.currentUser = user;
      }, function() {
        $scope.currentUser = '';
      });
    };

    $scope.login = function(creds) {
      userAuthService.login(creds).then(function(user) {
        $window.location.reload();
      });
    };

    $scope.logout = function() {
      userAuthService.logout().then(function() {
        $window.location.reload();
        $location.path( '/home' );
      });
    };

    $scope.loggedIn = function() {
      return !!($scope.currentUser);
    };

    $scope.init();

  }]);