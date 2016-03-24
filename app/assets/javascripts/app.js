var cooking = angular.module('cooking', ['ui.router', 'restangular', 'ngAnimate', 'Devise'])

.config( ['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
  function($stateProvider, $urlRouterProvider, RestangularProvider) {

    // REST Config
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({
      'content-type': 'application/json'
    });

    // Routing
    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '/templates/index.html',
        controller: ['$scope', function($scope) {
          $scope.test = "Hello, World!";
        }]
      })

  }])

cooking.run(['$rootScope',
  function($rootScope) {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
  }]);