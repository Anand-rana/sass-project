
angular.module('train_admin').factory('commonService', function ($http, train_ADMIN_URL , Upload ) {
    var commonObj = {};
    //common function for get requests
    commonObj.get = function (url, requestData, callback) {
        var req = {
            method: 'GET',
            url: train_ADMIN_URL + url,
            data: requestData
        };
        $http(req).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            callback(response);
        });
    };

    //common function for delete requests
    commonObj.delete = function (url, requestData, callback) {
        var req = {
            method: 'DELETE',
            url: train_ADMIN_URL + url,
            data: requestData
        };
        $http(req).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            callback(response);
        });
    };

    //common function for post requests
    commonObj.post = function (url, requestData, callback) {
        var req = {
            method: 'POST',
            url: train_ADMIN_URL + url,
            data: requestData
        };
        $http(req).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            callback(response);
        });
    };

    //common function for post requests
    commonObj.put = function (url, requestData, callback) {
        var req = {
            method: 'PUT',
            url: train_ADMIN_URL + url
        };
        if (Object.keys(requestData).length)
            req.data = requestData
        $http(req).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            callback(response);
        });
    };

    //common function for multipart file uploading requests
    commonObj.fileUpload = function (url, requestData, callback) {
        var req = {
            method: 'POST',
            url: train_ADMIN_URL + url,
            headers: {
                'Content-Type': 'multipart/form-data',
            }, data: requestData
        };
        Upload.upload(req).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            callback(response);
        });
    };
    //common function for multipart file uploading requests
    commonObj.fileUploadPut = function (url, requestData, callback) {
        var req = {
            method: 'PUT',
            url: train_ADMIN_URL + url,
            headers: {
                'Content-Type': 'multipart/form-data',
            }, data: requestData
        };
        Upload.upload(req).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            callback(response);
        });
    };

    commonObj.arrayObjectToSting = function (data) {
        var out = [];
        for (var key in data) {
            out.push(key + '=' + encodeURIComponent(data[key]));
        }
        return out.join('&');
    };


    return commonObj;
})
