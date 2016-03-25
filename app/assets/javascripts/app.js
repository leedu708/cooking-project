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

      // show resource
      .state('showRecipe', {
        url: '/recipe/:recipe_id',
        templateUrl: '/templates/recipe/show.html',
        controller: 'showRecipeCtrl'
      })

      // Admin Dashboard
      .state('admin', {
        url: '/admin',
        views: {
          '': {
            templateUrl: '/templates/admin/main.html'
          }
        }
      })

      .state('admin.dashboard', {
        url: '/dashboard',
        views: {
          'sidebar': {
            templateUrl: '/templates/admin/sidebar.html'
          },
          'dashboard': {
            templateUrl: '/templates/admin/dashboard.html'
          }
        }
      })

      .state('admin.dashboard.overview', {
        url: '/overview',
        templateUrl: '/templates/admin/dashboard/overview.html',
        controller: ['$scope', function($scope) {
          $scope.title = 'Overview';
        }]
      })

      .state('admin.dashboard.recipes', {
        url: '/recipes',
        templateUrl: '/templates/admin/dashboard/recipes.html',
        controller: 'adminRecipeCtrl'
      })

      .state('admin.dashboard.ingredients', {
        url: '/ingredients',
        templateUrl: '/templates/admin/dashboard/ingredients.html',
        controller: 'adminIngredientCtrl'
      })

      .state('admin.dashboard.tags', {
        url: '/tags',
        templateUrl: '/templates/admin/dashboard/tags.html',
        controller: ['$scope', function($scope) {
          $scope.title = 'Tags';
        }]
      })

  }])

cooking.run(['$rootScope',
  function($rootScope) {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
  }]);