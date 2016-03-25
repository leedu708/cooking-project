cooking.controller('adminRecipeCtrl',
  ['$scope', 'recipeService',
  function($scope, recipeService) {

    $scope.init = function() {
      $scope.pageTitle = 'Recipes';
      $scope.setRecipes();
    };

    $scope.setRecipes = function() {
      recipeService.index().then(function(response) {
        $scope.recipes = response;
      });
    };

    $scope.init();

  }]);