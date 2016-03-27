angular.module('app.controllers', [])
  
.controller('profileCtrl', function($scope) {

})
   
.controller('friendSListCtrl', function($scope) {

})
   
.controller('feedCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope, $ionicLoading, $http) {
    $scope.showLoading = function() {
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner>'
        });
    };
    $scope.hideLoading = function() {
        $ionicLoading.hide();
    };
    
    $scope.loginPressed = function()
    {
        $scope.showLoading();
        $scope.request = true;
        
        var data = {
            username: $scope.username,
            password: $scope.password
        };
        
        var config = {
            headers: {
                 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        
        $http.post("localhost", data, config);
    }
})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('editProfileCtrl', function($scope) {

})
   
.controller('editFriendCtrl', function($scope) {

})
   
.controller('addFriendCtrl', function($scope) {

})
   
.controller('addFriend2Ctrl', function($scope) {

})
   
.controller('pokesCtrl', function($scope) {

})
