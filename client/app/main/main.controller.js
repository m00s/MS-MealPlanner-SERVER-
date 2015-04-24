'use strict';

angular.module('msMealPlannerApp')
  .controller('MainCtrl', function ($scope, $modal, Auth) {

    var templateUrl = 'modal.html';

    $scope.openModal = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'app/modal/' + templateUrl,
        controller: 'ModalCtrl',
        size: size,
        resolve: {
          cb: function() {
            return $scope.cb;
          }
        }
      });

      modalInstance.result.then(function (cb) {
        cb();
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

    $scope.addRecipe = function() {
      templateUrl = 'addRecipe.html';
      $scope.openModal('lg');
    };

    $scope.editRecipe = function() {
    };

    $scope.viewRecipe = function() {
    };

    $scope.isLoggedIn = Auth.isLoggedIn;
  });
