cooking.controller('createRecipeCtrl',
  ['$scope', '$location', '$q', 'imageService', 'ingredientService', 'recipeService', 'tagService',
  function($scope, $location, $q, imageService, ingredientService, recipeService, tagService) {

    $scope.init = function() {
      $scope.recipe = {
        title: '',
        description: '',
        items: [],
        steps: [],
        taggings: []
      };

      $scope.images = [];

      $scope.addItem();
      $scope.addStep();
      $scope.addImage();
      $scope.addTag();

      ingredientService.index().then(function(response) {
        $scope.ingredients = ingredientService.sortByName(response);
      });

      tagService.index().then(function(response) {
        $scope.tags = tagService.sortByName(response);
      });
    };

    $scope.addItem = function() {
      var item = {
        ingredient_id: '',
        weight: '1g',
        volume: '1 cup',
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

    $scope.addTag = function() {
      var tag = {
        tag_id: ''
      };

      this.recipe.taggings.push(tag);
    };

    $scope.createRecipe = function(recipe) {
      // recipe.taggings = $scope.removeDuplicateTags(recipe.taggings);
      recipeService.create(recipe).then(function(response) {
        $scope.uploadImages(response.id, $scope.images)
          .then(function() {
            $location.path( "/recipes/" + response.id);   
        });        
      });
    };

    // $scope.removeDuplicateTags = function(tags) {
    //   return tags.filter(function(tag, id) {
    //     return tags.indexOf(tag) == id;
    //   });
    // };

    $scope.uploadImages = function(recipe_id, images) {
      var defer = $q.defer();
      defer.resolve(imageService.create(recipe_id, images));
      return defer.promise;
    };

    $scope.init();

  }]);