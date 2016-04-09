cooking.controller('LoginCtrl',
  ['$scope', 'Auth', '$location', '$window', 'userAuthService',
  function($scope, Auth, $location, $window, userAuthService) {

    $scope.init = function() {
      Auth.currentUser().then(function(user) {
        $scope.currentUser = user;
      }, function(error) {
        $scope.currentUser = '';
      });
    };

    $scope.login = function(creds) {
      userAuthService.login(creds).then(function(user) {
        $scope.currentUser = user;
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