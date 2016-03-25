cooking.controller('adminIngredientCtrl',
  ['$scope', 'ingredientService',
  function($scope, ingredientService) {

    $scope.init = function() {
      $scope.pageTitle = 'Ingredients';
      $scope.setIngredients();
    };

    $scope.setIngredients = function() {
      ingredientService.index().then(function(response) {
        $scope.ingredients = response;
      });
    };

    $scope.init();

  }]);