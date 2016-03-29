cooking.factory('recipeService',
  ['Restangular', 'Upload',
  function(Restangular, Upload) {

    recipeService = {};

    recipeService.index = function() {
      return Restangular.all('recipes').getList();
    };

    recipeService.show = function(id) {
      return Restangular.one('recipes', id).get();
    };

    recipeService.create = function(newRecipe, method, apiLink) {
      file_attachment = newRecipe.hero || [];
      options = {
        url: apiLink,
        method: method,
        file: file_attachment,
        file_form_data_name: file_attachment.name || "",
        fields: {
          recipe: {
            title: newRecipe.title,
            description: newRecipe.description
          }
        }
      };

      return Upload.upload(options);
    };

    return recipeService;

  }])