angular.module('train_admin').controller('trainerListCtrl', function($scope, $state, $rootScope, commonService, Session, $stateParams, $http) {
  $scope.skip = 0;
  $scope.limit = 10;
  $scope.currentPage = 1;
  $scope.filter = "";

  $scope.trainerList = function() {
    $scope.skip = ($scope.limit * $scope.currentPage) - $scope.limit;

    if ($scope.search) {
      var api_url = 'Admin/usersList?type=2&search=' + $scope.search + '&skip=' + $scope.skip + '&limit=' + $scope.limit
    } else if ($scope.filter) {
      var api_url = 'Admin/usersList?type=2&filter=' + $scope.filter + '&skip=' + $scope.skip + '&limit=' + $scope.limit
    } else {
      var api_url = 'Admin/usersList?type=2&skip=' + $scope.skip + '&limit=' + $scope.limit
    }

    commonService.get(api_url, {}, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          $scope.trainerListResult = response.data.data.result;
          $scope.totalItems = response.data.data.userCount;
        } else {
          swal({
            "title": response.data.message,
            "timer": "3000",
            type: "error"
          });
        }
      }
    });
  }
  $rootScope.$on('myCustomEvent', function(event, data) {
    $scope.trainerList();
  });
  $scope.trainerDetail = function() {
    commonService.get('Admin/getUserDetails?user_id=' + $stateParams.user_id, {}, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          $scope.trainer_data = response.data.data
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
  }

  // Approved Trainer function
  $scope.approveTrainer = function(userId) {
    swal({
        title: 'Are you sure you want to approve this trainer?',
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
            type: "1",
            Id: userId
          }
          console.log($scope.formData);
          commonService.post('Admin/approveDisApproveUser', $scope.formData, function(response) {
              if (response) {
                if (response.data && response.data.statusCode == "200") {
                  swal({
                    "title": "Approved Trainer Successfully.",
                    "timer": "3000",
                    type: "success"
                  }, function() {
                    $rootScope.$emit('myCustomEvent', 'Data to send');
                  });
                } else {
                  swal({
                    "title": "Oops! Something went wrong",
                    "timer": "3000",
                    type: "error"
                  });
                }
              }
            });
          }
          else {
            $state.go($state.current, {}, {
              reload: true
            });
          }
        });
    }
    // Dicline Trainer function
    $scope.recjectTrainer = function(userId) {
      swal({
          title: 'Are you sure you want to decline this trainer?',
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
              type: "2",
              Id: userId
            }
            console.log($scope.formData);
            commonService.post('Admin/approveDisApproveUser', $scope.formData, function(response) {
                if (response) {
                  if (response.data && response.data.statusCode == "200") {
                    swal({
                      "title": "Declined Trainer Successfully.",
                      "timer": "3000",
                      type: "success"
                    }, function() {
                      $rootScope.$emit('myCustomEvent', 'Data to send');
                    });
                  } else {
                    swal({
                      "title": "Oops! Something went wrong",
                      "timer": "3000",
                      type: "error"
                    });
                  }
                }
              });
            }
            else {
              $state.go($state.current, {}, {
                reload: true
              });
            }
          });
      }

  // $scope.download = function(fileId) {
  //   $http.get('http://trained.ignivastaging.com:8029/v1/Files/'+fileId+'&thumbnail=false',{
  //       responseType: "arraybuffer"
  //     }).then(function successCallback(response) {
  //         console.log("success",response)
  //       var anchor = angular.element('<a/>');
  //       var blob = new Blob([response.data]);
  //       anchor.attr({
  //         href: window.URL.createObjectURL(blob),
  //         target: '_blank',
  //         download: 'fileName.png'
  //       })[0].click();
  //   }, function errorCallback(response) {
  //       console.log("err",response)
  //   });
  //   console.log(fileId);
  //   $http.get('http://trained.ignivastaging.com:8029/v1/Files/'+fileId+'&thumbnail=false', {
  //       responseType: "arraybuffer"
  //     }).then(function(data) {
  //
  //     })
  // }

});
