cooking.controller('FavoritesCtrl',
  ['$scope', 'favorites', 'recipeService',
  function($scope, favorites, recipeService) {

    $scope.init = function() {
      $scope.favorites = recipeService.sortByTitle(favorites);
    };

    $scope.init();

  }]);