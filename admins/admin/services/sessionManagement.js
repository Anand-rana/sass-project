'use strict';
angular.module("train_admin").service('Session', function (store,$window) {
    this.create = function (accessToken, userData) {
        store.set('accessToken', accessToken);
        store.set('userData', userData);
    };
    this.destroy = function () {
        store.remove('accessToken');
        store.remove('userData');
    };
    this.get = function (key) {
        return store.get(key)
    };
    this.rememberMe = function (accessToken, userData) {

        console.log("before = ",userData.password)
        let rememebermeData ={};
        rememebermeData.token = accessToken;
        rememebermeData.email = window.btoa(userData.email);
        rememebermeData.password = window.btoa(userData.password);
        rememebermeData.role = window.btoa(userData.role);

console.log("after = ", window.btoa(rememebermeData.password ))

        store.set('rememebermeData', rememebermeData);
        }
})
