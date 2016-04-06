cooking.controller('indexRecipeCtrl',
  ['$scope', 'recipeService',
  function($scope, recipeService) {

    $scope.init = function() {
      $scope.setRecipes();
    };

    $scope.setRecipes = function() {
      recipeService.index().then(function(response) {
        $scope.recipes = response;
      });
    };

    $scope.init();

  }]);