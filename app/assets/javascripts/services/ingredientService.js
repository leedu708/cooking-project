cooking.factory('ingredientService',
  ['Restangular',
  function(Restangular) {

    ingredientService = {};

    ingredientService.index = function() {
      return Restangular.all('ingredients').getList();
    };

    ingredientService.show = function(id) {
      return Restangular.one('ingredients', id).get();
    };

    ingredientService.create = function(ingredient) {
      return Restangular.all('ingredients').post( ingredient );
    };

    ingredientService.destroy = function(ingredient) {
      return ingredient.remove();
    };

    ingredientService.sortByName = function(ingredients) {
      return ingredients.sort(function(a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 0;
        };
      });
    };

    return ingredientService;

  }])