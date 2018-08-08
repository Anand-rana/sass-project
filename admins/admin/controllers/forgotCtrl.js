angular.module("train_admin").controller("forgotCtrl", function ($scope,$state,$stateParams,$rootScope,commonService,Session) {

  $scope.forgot_password = function() {
          $("#loader").show();
          $scope.formData = {
              email: $scope.forgotData.email
          }
          commonService.post('Admin/forgotPassword', $scope.formData, function(response) {
              if (response) {
                  if (response.data && response.data.statusCode == '200') {
                      //$("#loader").hide();
                      // swal({ "title": response.data.message, type: "success" });
                      swal({
                          title: response.data.message,
                          text: "",
                          type: "success",
                          showCancelButton: false,
                          confirmButtonColor: '#DD6B55',
                          confirmButtonText: 'Ok',
                          // cancelButtonText: "No",
                          closeOnConfirm: true,
                          closeOnCancel: true
                      }, function(isConfirm) { // Redirect the user
                          if (isConfirm) {
                              $state.go('login')
                          } else {
                          }
                      })
                  } else {
                      //$("#loader").hide();
                      swal({
                              title: response.data.message,
                              text: "",
                              type: "warning",
                              showCancelButton: false,
                              confirmButtonColor: '#DD6B55',
                              confirmButtonText: 'Ok',
                              // cancelButtonText: "No",
                              closeOnConfirm: true,
                              closeOnCancel: true
                          }, function(isConfirm) { // Redirect the user
                              if (isConfirm) {
                                  $state.go('login')
                              } else {
                              }
                          })
                          // swal({ "title": response.data.message, type: "error" });
                  }
              }
          });
      }


      $scope.verify_password_token = function() {
      $scope.formData = {
          "password_token": $stateParams.token
      }
      commonService.post('Admin/verifypasswordtoken', $scope.formData, function(response) {
          if (response) {
              if (response.data && response.data.statusCode == '200') {
                  $scope.expire = false;
              } else {
                  $scope.expire = true;
                  swal({
                      title: 'The Link has expired.',
                      text: "",
                      type: "warning",
                      showCancelButton: false,
                      confirmButtonColor: '#DD6B55',
                      confirmButtonText: 'Ok',
                      // cancelButtonText: "No",
                      closeOnConfirm: true,
                      closeOnCancel: true
                  }, function(isConfirm) { // Redirect the user
                      if (isConfirm) {
                          $state.go('login')
                      } else {
                      }
                  })
              }
          }
      });
  }
  $scope.reset_password = function() {
       //$("#loader").show();
       $scope.formData = {
           password_token: $stateParams.token,
           Password: $scope.formData.password
       }
       commonService.post('Admin/resetPassword', $scope.formData, function(response) {
           if (response) {
               if (response.data && response.data.statusCode == '200') {
                   //$("#loader").hide();
                   // swal({ "title": response.data.message, "timer": "3000", type: "success" });
                   // $state.go("login");


                   swal({
                       title: response.data.message,
                       text: "",
                       type: "success",
                       showCancelButton: false,
                       confirmButtonColor: '#DD6B55',
                       confirmButtonText: 'Ok',
                       // cancelButtonText: "No",
                       closeOnConfirm: true,
                       // closeOnCancel: true
                   }, function(isConfirm) { // Redirect the user
                       if (isConfirm) {
                        //   console.log("ok button is clicked")
                           $state.go('login')
                       } else {
                           //console.log("cancel button is clicked")
                       }
                   })

               } else {
                   $("#loader").hide();
                   //  swal({ "title": response.data.message, "timer": "3000", type: "error" });

                   swal({
                       title: response.data.message,
                       text: "",
                       type: "warning",
                       showCancelButton: false,
                       confirmButtonColor: '#DD6B55',
                       confirmButtonText: 'Ok',
                       // cancelButtonText: "No",
                       closeOnConfirm: true,
                       // closeOnCancel: true
                   }, function(isConfirm) { // Redirect the user
                       if (isConfirm) {
                          // console.log("ok button is clicked")
                           $state.go('login')
                       } else {
                          // console.log("cancel button is clicked")
                       }
                   })
               }
           }
       });
   }

});
