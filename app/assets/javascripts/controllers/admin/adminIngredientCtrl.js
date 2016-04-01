cooking.controller('adminIngredientCtrl',
  ['$scope', '$window', 'ingredientService',
  function($scope, $window, ingredientService) {

    $scope.init = function() {
      $scope.pageTitle = 'Ingredients';
      $scope.setIngredients();
    };

    $scope.setIngredients = function() {
      ingredientService.index().then(function(response) {
        $scope.ingredients = ingredientService.sortByName(response);
      });
      $scope.ingredient = {};
    };

    $scope.createIngredient = function(ingredient) {
      ingredientService.create(ingredient).then(function() {
        $scope.setIngredients();
      });
    };

    $scope.deleteIngredient = function(ingredient) {
      if ($window.confirm('Are you sure you want to delete ' + ingredient.name + '?')) {
        ingredientService.destroy(ingredient).then(function() {
          $scope.setIngredients();
        });
      };
    };

    $scope.init();

  }]);