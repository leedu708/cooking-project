cooking.controller('createRecipeCtrl',
  ['$scope', '$location', '$q', 'imageService', 'ingredientService', 'recipeService',
  function($scope, $location, $q, imageService, ingredientService, recipeService) {

    $scope.init = function() {
      $scope.recipe = {
        title: '',
        description: '',
        items: [],
        steps: []
      };

      $scope.images = [];

      for (var i = 1; i <= 3; i++) {
        $scope.addItem();
        $scope.addStep();
        $scope.addImage();
      };

      ingredientService.index().then(function(response) {
        $scope.ingredients = response;
      });
    };

    $scope.addItem = function() {
      var item = {
        ingredient_id: '',
        amount: 1,
        notes: ''
      };

      this.recipe.items.push(item);
    };

    $scope.addStep = function() {
      var step = {
        instructions: '',
        recipe_order: $scope.recipe.steps.length + 1
      };

      this.recipe.steps.push(step);
    };

    $scope.addImage = function() {
      var image = {
        id: $scope.images.length + 1,
        attachment: ''
      };

      $scope.images.push(image);
    };

    $scope.createRecipe = function(recipe) {
      recipeService.create(recipe).then(function(response) {
        $scope.uploadImages(response.id, $scope.images)
          .then(function() {
            $location.path( "/recipes/" + response.id);   
        });        
      });
    };

    $scope.uploadImages = function(recipe_id, images) {
      var defer = $q.defer();
      defer.resolve(imageService.create(recipe_id, images));
      return defer.promise;
    };

    $scope.init();

  }]);