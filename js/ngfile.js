var app = angular.module('ngmain', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'front.html',
      controller: 'mainController'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'mainController'
    })
    .when('/demos', {
      templateUrl: 'demos.html',
      controller: 'mainController'
    })
    .when('/sites/ctsa/front', {
      templateUrl: '/sites/ctsa/front.html',
      controller: 'siteController'
    })
    .when('/sites/optimc/front', {
      templateUrl: '/sites/optimc/front.html',
      controller: 'siteController'
    })
    .when('/sites/wavelib/front', {
      templateUrl: '/sites/wavelib/front.html',
      controller: 'siteController'
    })
    .when('/sites/hsfft/front', {
      templateUrl: '/sites/hsfft/front.html',
      controller: 'siteController'
    })
    .when('/sites/dyadwaves/front', {
      templateUrl: '/sites/dyadwaves/front.html',
      controller: 'siteController'
    })
    .when('/sites/wavelet1d/front', {
      templateUrl: '/sites/wavelet1d/front.html',
      controller: 'siteController'
    })
    .when('/sites/liftwave/front', {
      templateUrl: '/sites/liftwave/front.html',
      controller: 'siteController'
    })
    .when('/sites/wavepy/front', {
      templateUrl: '/sites/wavepy/front.html',
      controller: 'siteController'
    })
});

app.controller('mainController', function(){

});

app.controller('siteController', function ($scope) {

});
