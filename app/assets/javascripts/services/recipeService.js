cooking.factory('recipeService',
  ['Restangular', '$rootScope',
  function(Restangular, $rootScope) {

    recipeService = {};

    // rails controller actions
    recipeService.index = function() {
      return Restangular.all('recipes').getList();
    };

    recipeService.home = function() {
      return Restangular.all('recipes').customGETLIST('home');
    };

    recipeService.show = function(id) {
      return Restangular.one('recipes', id).get();
    };

    recipeService.create = function(recipe) {
      return Restangular.all('recipes').post( recipe );
    };

    recipeService.favorite = function(recipe) {
      return Restangular.one('recipes', recipe.id).post('favorite');
    };

    recipeService.destroy = function(recipe) {
      return recipe.remove();
    };

    // sorting functions
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

    // boolean checks
    recipeService.favorited = function(recipe, userID) {
      return (recipe.favorite_ids.includes(userID));
    };

    return recipeService;

  }])