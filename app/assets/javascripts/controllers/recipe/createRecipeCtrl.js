cooking.controller('createRecipeCtrl',
  ['$scope', '$location', 'ingredientService', 'recipeService',
  function($scope, $location, ingredientService, recipeService) {

    var item = {
      ingredient_id: '',
      amount: '',
      notes: ''
    };

    var step = {
      instructions: '',
      recipe_order: ''
    };

    $scope.init = function() {
      $scope.recipe = {
        title: '',
        description: '',
        item_attributes: [],
        step_attributes: []
      };

      for (var i = 1; i <= 3; i++) {
        $scope.recipe.item_attributes.push(item);
        $scope.recipe.step_attributes.push(step);
      };

      ingredientService.index().then(function(response) {
        $scope.ingredients = response;
      });

      console.log($scope.recipe);
    };

    $scope.addItem = function() {
      this.recipe.item_attributes.push(item);
    };

    $scope.addStep = function() {
      this.recipe.step_attributes.push(step);
    };

    $scope.createRecipe = function(recipe) {
      recipeService.create().then(function(response) {
        $location.path( "/recipes/" + response.id);
      });
    };

    $scope.init();

  }]);