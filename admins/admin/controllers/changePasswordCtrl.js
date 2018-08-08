angular.module('train_admin').controller('changePasswordCtrl', function($scope, $state, $rootScope, commonService, Session, $stateParams) {



   $scope.change_password = function() {
      console.log("$scope.formData", $scope.formData)
      $scope.formData = {
         oldPassword: $scope.formData.oldpassword,
         newPassword: $scope.formData.password
      }

      commonService.post('Admin/changePassword', $scope.formData, function(response) {
         if (response) {
            $("#loader").hide();
            if (response.data && response.data.statusCode == '200') {
               // $scope.warning_message = response.data.message
               swal({
                  "title": response.data.message,
                  "timer": "3000",
                  type: "success"
               });
               $state.go($state.current, {}, {
                  reload: true
               })
            } else {
               $scope.warning_message = response.data.message
            }
         }
      });
   }


});
