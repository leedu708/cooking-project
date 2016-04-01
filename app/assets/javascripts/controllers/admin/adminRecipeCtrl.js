cooking.controller('adminRecipeCtrl',
  ['$scope', '$window', 'recipeService',
  function($scope, $window, recipeService) {

    $scope.init = function() {
      $scope.pageTitle = 'Recipes';
      $scope.setRecipes();
    };

    $scope.setRecipes = function() {
      recipeService.index().then(function(response) {
        $scope.recipes = recipeService.sortByTitle(response);
      });
    };

    $scope.deleteRecipe = function(recipe) {
      if ($window.confirm('Are you sure you want to delete ' + recipe.title + '?')) {
        recipeService.destroy(recipe).then(function() {
          $scope.setRecipes();
        });
      };
    };

    $scope.init();

  }]);