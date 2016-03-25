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

    return recipeService;

  }])