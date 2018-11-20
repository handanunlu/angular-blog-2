
'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view2', {
   templateUrl: 'view2/view2.html',
   controller: 'View2Ctrl'
 });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
  if (localStorage.getItem("posts") === null) {
    $scope.allPosts = [];
    localStorage.setItem('posts', JSON.stringify($scope.allPosts));
  }
 $scope.allPosts = JSON.parse(localStorage.getItem('posts'));
 $scope.data = { title: "", content: "", comment: [], newComment: ""};
 $scope.addPost = function () {
     $scope.allPosts.push($scope.data);
     localStorage.setItem('posts', JSON.stringify($scope.allPosts))
 }
}]);