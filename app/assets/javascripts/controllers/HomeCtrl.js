cooking.controller('HomeCtrl',
  ['$scope', 'recipeService',
  function($scope, recipeService) {

    $scope.init = function() {
      $scope.setRecipes();
    };

    $scope.setRecipes = function() {
      recipeService.home().then(function(response) {
        $scope.recipes = response;
      });
    };

    $scope.init();

  }]);