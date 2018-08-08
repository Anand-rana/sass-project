angular.module('train_admin').controller('dashboardCtrl', function($scope, $state, $rootScope, commonService, Session, $stateParams) {

  $scope.dashboardContent = function () {
    var api_url = 'Admin/Dashboard'
    commonService.get(api_url, $scope.formData, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {

          $scope.dashboardContent = response.data.data;
        } else {
           swal({ "title": response.data.message, "timer": "3000", type: "error" });
        }
      }
    });
  }
  $scope.dashboardContent();

});
