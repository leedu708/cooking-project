cooking.controller('HomeCtrl',
  ['$scope', 'recipeService', 'userAuthService',
  function($scope, recipeService, userAuthService) {

    $scope.init = function() {
      $scope.setRecipes();
      $scope.flippedCards = [];

      userAuthService.getCurrentUser().then(function(user) {
        $scope.userID = user.id;
      }, function() {
        $scope.userID = 0;
      });
    };

    $scope.setRecipes = function() {
      recipeService.home().then(function(response) {
        $scope.recipes = response;
      });
    };

    $scope.favorite = function(recipe) {
      recipeService.favorite(recipe).then(function() {
        $scope.setRecipes();
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

    $scope.favorited = function(recipe) {
      if ($scope.userID) {
        return recipeService.favorited(recipe, $scope.userID);
      } else {
        return true;
      };
    };

    $scope.init();

  }]);