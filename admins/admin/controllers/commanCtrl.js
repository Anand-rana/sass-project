angular.module('train_admin').controller('commanCtrl', function($scope, $state, $rootScope, commonService, Session, $stateParams) {
  $scope.logout = function() {
    // $("#loader").show();
    $scope.formData = {}
    console.log('clicked');
    commonService.post('Admin/logOut', $scope.formData, function(response) {
      if (response) {
        $state.go("login");
        Session.destroy(response.headers('x-logintoken'), response);
        //$("#loader").hide();
      } else {

      }
    });
  }

  $scope.blockUser = function(user_id) {
    swal({
      title: 'Are you sure you want to block the user?',
      text: "",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function(isConfirm) {
      if (isConfirm) {
        $scope.formData = {
          type: 1,
          userid: user_id,
          message: 'Block user'
        }
        //  console.log(is_blocked);
        commonService.put('Admin/UserblockUnblock', $scope.formData, function(response) {
          if (response) {
            if (response.data && response.data.statusCode == '200') {
              swal({
                "title": "User blocked successfully.",
                "timer": "3000",
                type: "success"
              }, function() {
                $rootScope.$emit('myCustomEvent', 'Data to send');
              });
            } else {
              swal({
                "title": response.data.message,
                "timer": "3000",
                type: "error"
              });
            }
          }
        });
      } else {
        $state.go($state.current, {}, {
          reload: true
        })
      }
    });
  }

  $scope.unblockUser = function(user_id) {
    swal({
      title: 'Are you sure you want to un-Block the bus?',
      text: "",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes',
      cancelButtonText: "No",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function(isConfirm) {
      if (isConfirm) {
        $scope.formData = {
          type: 2,
          userid: user_id,
          message: 'Un-Block user'
        }
        commonService.put('Admin/UserblockUnblock', $scope.formData, function(response) {
          if (response) {
            if (response.data && response.data.statusCode == '200') {
              swal({
                "title": "User Unblocked successfully",
                "timer": "3000",
                type: "success"
              }, function() {
                $rootScope.$emit('myCustomEvent', 'Data to send');
              });

            } else {
              swal({
                "title": response.data.message,
                "timer": "3000",
                type: "error"
              });
              $state.go($state.current, {}, {
                reload: true
              })
            }
          }
        });
      } else {
        $state.go($state.current, {}, {
          reload: true
        })
      }
    });
  }
});
