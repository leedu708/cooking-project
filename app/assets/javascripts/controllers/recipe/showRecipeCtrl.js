cooking.controller('showRecipeCtrl',
  ['$scope', '$stateParams', 'recipeService', 'itemService',
  function($scope, $stateParams, recipeService, itemService) {

    $scope.init = function() {
      $scope.getRecipe($stateParams['recipe_id']);
      $scope.units = 'grams';
      console.log($scope.units);
    };

    $scope.getRecipe = function(id) {
      recipeService.show(id).then(function(response) {
        $scope.recipe = response;
        itemService.setItems($scope.recipe.items);
        $scope.items = itemService.getItems();
      });
    };

    $scope.setUnits = function(unit) {
      if ($scope.units === 'grams') {
        itemService.convertToGrams();
        $scope.items = itemService.getItems();
      } else {
        itemService.convertToOz();
        $scope.items = itemService.getItems();
      }
    };

    $scope.init();

  }]);