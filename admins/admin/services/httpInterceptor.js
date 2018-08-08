angular.module("train_admin").service('httpInterceptor', function ($q, Session,$injector) {


    var service = this;
    service.request = function (config) {
        // $("#loader").show();
        var access_token = Session.get("accessToken");
         //console.log(access_token);
        if (access_token) {
            config.headers["x-logintoken"] = access_token;
        }
        return config;
    };
    service.response = function (response) {
         //$("#loader").hide();
      //   console.log(response.data.statusCode);
        if (response.data.statusCode == 324) {//session expired
            Session.destroy(response.headers('x-logintoken'), response);
            $injector.get('$state').transitionTo('login');
            swal({ "title": response.data.message, type: "error" });
            return false;
        }else if(response.data.statusCode == 413) {
            Session.destroy(response.headers('x-logintoken'), response);
            $injector.get('$state').transitionTo('login');
            swal({ "title": response.data.message, type: "error" });
        }
        else {
            return response;
        }

    };

    service.requestError = function (rejection) {
         //$("#loader").hide();
        return $q.reject(rejection);
    };

    service.responseError = function (rejection) {
        // $("#loader").hide();
        var deferred = $q.defer();

        if (!rejection.data) {//if no response from server
            console.log("======response error=====")
            rejection.data = {
                "statusCode": 408,
                "error": "error",
                "message": "Buus is not responding. Please try later."
            };
            deferred.resolve(rejection);
            return deferred.promise;
        } else {
            deferred.resolve(rejection);
            return deferred.promise;
        }
    };
    service.cancelRequest = function () {
        var canceller = $q.defer();
        canceller.resolve();
    }
})
