var app = angular.module('bakpak', [
  'bakpakFactory',
  'homeModule',
  'exploreModule',
  'restaurantsModule',
  'dealsModule',
  'eventModule',
  'translateModule',
  'bakpak.signin',
  'bakpak.signup',
  'bakpak.signout',
  'tourModule',
  'ngRoute'])

// app.run(['$anchorScroll', function($anchorScroll) {
// 	$anchorScroll.yOffset = 50;
// }])
// .controller('appCtrl', function($scope, information, $rootScope){
//
//   // $scope.gotoAnchor = function(x) {
//   //   console.log('ha',x);
//   //   var newHash = 'anchor' + x;
//   //   if ($location.hash() !== newHash) {
//   //     // set the $location.hash to `newHash` and
//   //     // $anchorScroll will automatically scroll to it
//   //     $location.hash('anchor' + x);
//   //   } else {
//   //     // call $anchorScroll() explicitly,
//   //     // since $location.hash hasn't changed
//   //     $anchorScroll();
//   //   }
//   // }
// })
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './home/home.html',
    controller: 'homeCtrl'
  })
  .when('/tour', {
    templateUrl: './tourism/tour.html',
    controller:  'tourCtrl'
  })
  .when('/reserve', {
    templateUrl: './reserve/reserve.html'
  })
  .when('/signin', {
    templateUrl: './signin/signin.html',
    controller: 'signinCtrl'
  })
  .when('/signup', {
    templateUrl: './signup/signup.html',
    controller: 'signupCtrl'
  })
  .when('/signout', {
    templateUrl: './signout/signout.html',
    controller: 'signoutCtrl'
  })
  .when('/restaurants', {
    templateUrl: './restaurants/restaurants.html',
    controller: 'restaurantsCtrl'
  })
  .when('/deal', {
    templateUrl: './deals/deals.html',
    controller: 'dealsCtrl'
  })
  .when('/event', {
    templateUrl: './event/event.html',
    controller: 'eventCtrl'
  })
  .when('/translate', {
    templateUrl: './translate/translate.html',
    controller: 'translateCtrl'
  })
  .when('/loading', {
    templateUrl: './loading/loading.html'
  })
  .when('/explore', {
    templateUrl: './explore/explore.html',
    controller: 'exploreCtrl'
  })
  .otherwise({
    redirectTo: '/',
  })
})
