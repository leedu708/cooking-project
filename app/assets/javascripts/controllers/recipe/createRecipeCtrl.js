cooking.controller('createRecipeCtrl',
  ['$scope', '$location', 'ingredientService', 'recipeService',
  function($scope, $location, ingredientService, recipeService) {

    $scope.init = function() {
      $scope.recipe = {
        title: '',
        description: '',
        items_attributes: [],
        steps_attributes: []
      };

      for (var i = 1; i <= 3; i++) {
        $scope.addItem();
        $scope.addStep();
      };

      ingredientService.index().then(function(response) {
        $scope.ingredients = response;
      });

      console.log($scope.recipe);
    };

    $scope.addItem = function() {
      var item = {
        ingredient_id: '',
        amount: 1,
        notes: ''
      };

      this.recipe.items_attributes.push(item);
    };

    $scope.addStep = function() {
      var step = {
        instructions: '',
        recipe_order: $scope.recipe.steps_attributes.length + 1
      };

      this.recipe.steps_attributes.push(step);
    };

    $scope.createRecipe = function(recipe) {
      recipeService.create(recipe).then(function(response) {
        $location.path( "/recipes/" + response.id);
      });
    };

    $scope.init();

  }]);