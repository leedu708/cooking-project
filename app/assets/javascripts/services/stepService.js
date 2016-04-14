cooking.factory('stepService',
  [
  function() {

    stepService = {};

    stepService.sortByOrder = function(steps) {
      return steps.sort(function(a, b) {
        if (a.recipe_order > b.recipe_order) {
          return 1;
        } else if (a.recipe_order < b.recipe_order) {
          return -1;
        } else {
          return 0;
        };
      });
    };

    return stepService;

  }]);