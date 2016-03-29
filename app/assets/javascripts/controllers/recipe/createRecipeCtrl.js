cooking.controller('createRecipeCtrl',
  ['$scope', '$location', 'Upload', 'recipeService',
  function($scope, $location, Upload, recipeService) {

    $scope.init = function() {
      $scope.recipe = {};
    };

    $scope.createRecipe = function(recipe) {
      var apiLink = 'http://localhost:3000/api/recipes.json'
      var method = 'POST'
      recipeService.create(recipe, apiLink, method).then(function(response) {
        $location.path( "/recipes/" + response.id);
      });
    };

    $scope.init();

  }]);