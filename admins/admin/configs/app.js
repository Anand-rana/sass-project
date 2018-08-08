var trained_admin = angular.module('train_admin', ['ui.router', 'angular-storage', 'ui.bootstrap','angularModalService','froala','oc.lazyLoad','ngAnimate' ,'ngFileUpload' ,'ngSanitize',]);

trained_admin.run(['$state', '$rootScope', 'Session', '$transitions',
    function($state, $rootScope, Session, $transitions) {
        $transitions.onSuccess({}, trans => {

            if (!Session.get('accessToken') && trans.to().authenticate) {
                $state.go("login");
            }

            else if (trans.to().callByBoth == true) {
                console.log("rest reset_password state")
                $state.go("reset_password")
            }

            else if (Session.get('accessToken') && !trans.to().authenticate) {
               $state.go("main.dashboard")
             }

        });

    }
]);
trained_admin.filter('toImageUrl', function (train_ADMIN_URL) {
   return function (input) {
     if (input) {
       return train_ADMIN_URL+"Files/"+input
     }
     else {
       return '';
     }
   };
 });
