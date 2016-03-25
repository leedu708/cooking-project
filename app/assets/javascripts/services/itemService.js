cooking.factory('itemService',
  [
  function() {

    itemService = {};

    itemService.items = [];

    itemService.setItems = function(items) {
      this.items = items;
    };

    itemService.convertToOz = function() {
      angular.forEach(this.items, function(item) {
        item.amount = item.amount / 28;
      });
    };

    itemService.convertToGrams = function() {
      angular.forEach(this.items, function(item) {
        item.amount = item.amount * 28;
      });
    };

    itemService.getItems = function() {
      return this.items;
    };

    return itemService;

  }]);