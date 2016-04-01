cooking.factory('recipeService',
  ['Restangular',
  function(Restangular) {

    recipeService = {};

    recipeService.index = function() {
      return Restangular.all('recipes').getList();
    };

    recipeService.show = function(id) {
      return Restangular.one('recipes', id).get();
    };

    recipeService.create = function(recipe) {
      return Restangular.all('recipes').post( recipe );
    };

    recipeService.destroy = function(recipe) {
      return recipe.remove();
    };

    recipeService.sortByTitle = function(recipes) {
      return recipes.sort(function(a, b) {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        };
      });
    };

    recipeService.sortByCreated = function() {
      return recipes.sort(function(a, b) {
        if (a.created_at < b.created_at) {
          return 1;
        } else if (a.created_at > b.created_at) {
          return -1;
        } else {
          0;
        };
      });
    };

    return recipeService;

  }])