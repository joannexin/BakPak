angular.module('exploreModule', [])
.controller('exploreCtrl', function($scope, $http, information){
  var landmarksApi = function(){
    $http({
      method: 'POST',
      url: '/landmarks',
      data: {city: information.city}
    })
    .then(function(data){
      $scope.landmarks = data.data.businesses
      console.log('here', data);
    })
  }
  landmarksApi();
})
