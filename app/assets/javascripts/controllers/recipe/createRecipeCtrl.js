cooking.controller('createRecipeCtrl',
  ['$scope', '$location', 'Upload', 'recipeService',
  function($scope, $location, Upload, recipeService) {

    $scope.init = function() {
      $scope.recipe = {};
    };

    $scope.createRecipe = function(recipe) {
      var apiLink = 'api/recipes.json'
      var method = 'POST'
      recipeService.create(recipe, method, apiLink).then(function(response) {
        $location.path( "/recipes/" + response.data.id);
      });
    };

    $scope.init();

  }]);