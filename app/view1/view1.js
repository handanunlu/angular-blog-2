
'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view1', {
   templateUrl: 'view1/view1.html',
   controller: 'View1Ctrl'
 });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  if (localStorage.getItem("posts") === null) {
    $scope.list = [];
    localStorage.setItem('posts', JSON.stringify($scope.list));
  }
 $scope.list = JSON.parse(localStorage.getItem('posts'));
 $scope.addComment = function (data) {
     angular.forEach($scope.list, function (v) {
         if (v.id === data.id) {
           v.comment.push({text: v.newComment});
           v.newComment = "";
         }
     });
     localStorage.setItem('posts', JSON.stringify($scope.list));
     $scope.list = JSON.parse(localStorage.getItem('posts'));
 }

}]);