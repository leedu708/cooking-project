cooking.controller('adminTagCtrl',
  ['$scope', '$window', 'tagService',
  function($scope, $window, tagService) {

    $scope.init = function() {
      $scope.pageTitle = 'Tags';
      $scope.setTags();
    };

    $scope.setTags = function() {
      tagService.index().then(function(response) {
        $scope.tags = tagService.sortByName(response);
      });
      $scope.tag = {};
    };

    $scope.createTag = function(tag) {
      tagService.create(tag).then(function() {
        $scope.setTags();
      });
    };

    $scope.deleteTag = function(tag) {
      if ($window.confirm('Are you sure you want to delete ' + tag.name + '?')) {
        tagService.destroy(tag).then(function() {
          $scope.setTags();
        });
      };
    };

    $scope.init();

  }]);