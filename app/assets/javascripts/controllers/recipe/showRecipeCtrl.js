cooking.controller('showRecipeCtrl',
  ['$scope', '$stateParams', 'recipeService', 'itemService',
  function($scope, $stateParams, recipeService, itemService) {

    $scope.init = function() {
      $scope.getRecipe($stateParams['recipe_id']);
      $scope.measurement = 'weight';
    };

    $scope.getRecipe = function(id) {
      recipeService.show(id).then(function(response) {
        $scope.recipe = response;
        itemService.setItems($scope.recipe.items);
        $scope.items = itemService.getItems();
      });
    };

    $scope.currentMeasurement = function(measurement) {
      return !!(measurement === $scope.measurement);
    };

    $scope.init();

  }]);