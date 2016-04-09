cooking.directive('loginModal', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: '/templates/shared/loginModal.html',
    scope: true,
    controller: 'LoginCtrl'
  }
})