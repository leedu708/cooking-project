cooking.controller('HomeCtrl',
  ['$scope', 'recipeService',
  function($scope, recipeService) {

    $scope.init = function() {
      $scope.setRecipes();
      $scope.flippedCards = [];
    };

    $scope.setRecipes = function() {
      recipeService.home().then(function(response) {
        $scope.recipes = response;
      });
    };

    $scope.flip = function(recipe) {
      $scope.flippedCards.push(recipe);
    };

    $scope.closeFlip = function(removed) {
      $scope.flippedCards = $scope.flippedCards.filter( function(recipe) {
        return recipe.id !== removed.id;
      });
    };

    $scope.flipped = function(recipe) {
      return ($scope.flippedCards.indexOf(recipe) > -1);
    };

    $scope.init();

  }]);