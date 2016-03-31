cooking.controller('adminIngredientCtrl',
  ['$scope', 'ingredientService',
  function($scope, ingredientService) {

    $scope.init = function() {
      $scope.pageTitle = 'Ingredients';
      $scope.ingredient = {};
      $scope.addForm = false;
      $scope.setIngredients();
    };

    $scope.setIngredients = function() {
      ingredientService.index().then(function(response) {
        $scope.ingredients = response;
      });
    };

    $scope.createIngredient = function(ingredient) {
      ingredientService.create(ingredient).then(function(response) {
        $scope.ingredients.push(response);
        $scope.toggleAddForm();
        $scope.ingredient = {};
      });
    };

    $scope.toggleAddForm = function() {
      $scope.addForm = !$scope.addForm;
    };

    $scope.init();

  }]);