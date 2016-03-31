cooking.factory('imageService',
  ['Upload',
  function(Upload) {

    imageService = {};

    imageService.create = function(recipe_id, images) {
      var method = 'POST';
      var api = 'api/images.json';

      for (var i = 0; i < images.length; i++) {
        var file_attachment = images[i].attachment || 0;
        options = {
          url: api,
          method: method,
          file: file_attachment,
          file_form_data_name: file_attachment.name || "",
          fields: {
            image: {
              recipe_id: recipe_id,
            }
          }
        };

        if (!!file_attachment) {
          Upload.upload(options);
        };
      };
    };

    return imageService;

  }]);