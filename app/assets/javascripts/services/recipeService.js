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

    recipeService.create = function(newRecipe, method, url) {
      file_attachment = newRecipe.hero || [];
      console.log(file_attachment);
      options = {
        url: url,
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

      console.log(options);

      return Upload.upload(options);
    };

    return recipeService;

  }])