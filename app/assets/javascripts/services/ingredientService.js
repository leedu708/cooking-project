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

    return ingredientService;

  }])