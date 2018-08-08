
angular.module("train_admin").controller("loginCtrl", function ($scope,$state,$rootScope,commonService,Session) {
    // console.log('\n\n------------IN LOGIN CONTROLLER')

 $scope.login = function () {
         $("#loader").show();
            $scope.formData={
            	email:$scope.loginData.email,
            	password: $scope.loginData.password
            }

        commonService.post('Admin/login',$scope.formData, function (response) {
            if (response) {
                $("#loader").hide();
                if (response.data && response.data.statusCode == '200') {
                    Session.create(response.headers('x-logintoken'),response );
                    Session.rememberMe(response.headers('x-logintoken'),response );
                    $state.go("main.dashboard");
                } else {
                    $scope.warning_message = response.data.message
                    console.log($scope.warning_message);
                }
            }
        });
    }
});
