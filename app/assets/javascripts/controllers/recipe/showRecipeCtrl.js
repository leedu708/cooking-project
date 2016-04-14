cooking.controller('showRecipeCtrl',
  ['$scope', '$stateParams', 'recipeService', 'stepService', 'itemService',
  function($scope, $stateParams, recipeService, stepService, itemService) {

    $scope.init = function() {
      $scope.getRecipe($stateParams['recipe_id']);
      $scope.measurement = 'weight';
    };

    $scope.getRecipe = function(id) {
      recipeService.show(id).then(function(response) {
        $scope.recipe = response;
        itemService.setItems($scope.recipe.items);
        $scope.items = itemService.getItems();
        $scope.steps = stepService.sortByOrder(response.steps);
      });
    };

    $scope.currentMeasurement = function(measurement) {
      return !!(measurement === $scope.measurement);
    };

    $scope.init();

  }]);