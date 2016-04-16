cooking.factory('tagService',
  ['Restangular',
  function(Restangular) {

    tagService = {};

    tagService.index = function() {
      return Restangular.all('tags').getList();
    };

    tagService.show = function(id) {
      return Restangular.one('tags', id).get();
    };

    tagService.create = function(tag) {
      return Restangular.all('tags').post( tag );
    };

    tagService.destroy = function(tag) {
      return tag.remove();
    };

    tagService.sortByName = function(tags) {
      return tags.sort(function(a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 0;
        };
      });
    };

    return tagService;

  }])