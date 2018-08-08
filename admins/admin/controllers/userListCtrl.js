angular.module('train_admin').controller('userListCtrl', function($scope, $state, $rootScope, commonService, Session, $stateParams) {

   // user list records
   $scope.skip = 0;
   $scope.limit = 10;
   $scope.maxSize = 5;
   $scope.currentPage = 1;
   $scope.filter = ""
   $rootScope.current = "UserManagement";

   //userlist

   $scope.user_List = function() {
      $scope.skip = ($scope.limit * $scope.currentPage) - $scope.limit;

      if ($scope.search) {
         var api_url = 'Admin/usersList?type=1&search=' + $scope.search + '&skip=' + $scope.skip + '&limit=' + $scope.limit
      } else if ($scope.filter) {
         var api_url = 'Admin/usersList?type=1&filter=' + $scope.filter + '&skip=' + $scope.skip + '&limit=' + $scope.limit
      } else {
         var api_url = 'Admin/usersList?type=1&skip=' + $scope.skip + '&limit=' + $scope.limit
      }

      commonService.get(api_url, {}, function(response) {
         if (response) {
            if (response.data && response.data.statusCode == '200') {
               $scope.userList = response.data.data.result;
               $scope.totalItems = response.data.data.userCount
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

   $rootScope.$on('myCustomEvent', function (event, data) {
     $scope.user_List();
   });

   $scope.user_detail = function () {
        //$("#loader").show();
        commonService.get('Admin/getUserDetails?user_id=' + $stateParams.user_id , {}, function (response) {



            if (response) {
                if (response.data && response.data.statusCode == '200') {
                    //$("#loader").hide();
                    $scope.user_data = response.data.data
                    console.log(typeof $scope.user_data);
                } else {
                    swal({ "title": response.data.message, "timer": "3000", type: "error" });
                    $state.go($state.current, {}, { reload: true })
                }
            }
        });
    }


});
