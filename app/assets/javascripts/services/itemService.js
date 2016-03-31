cooking.factory('itemService',
  [
  function() {

    itemService = {};

    itemService.items = [];

    itemService.setItems = function(items) {
      this.items = items;
    };

    itemService.getItems = function() {
      return this.items;
    };

    return itemService;

  }]);