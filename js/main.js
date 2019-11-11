/**
 * Main AngularJS Web Application
 */

var app = angular.module('macs-website', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "src/home.html", controller: "PageCtrl"})
    // Pages
    .when("/execs", {templateUrl: "src/execs.html", controller: "PageCtrl"})
    //.when("/faq", {templateUrl: "src/faq.html", controller: "PageCtrl"})
    //.when("/pricing", {templateUrl: "src/pricing.html", controller: "PageCtrl"})
    .when("/gullcode", {templateUrl: "src/gullcode.html", controller: "PageCtrl"})
    //.when("/contact", {templateUrl: "src/contact.html", controller: "PageCtrl"})
    // Blog
    //.when("/blog", {templateUrl: "src/blog.html", controller: "BlogCtrl"})
    //.when("/blog/post", {templateUrl: "src/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "src/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

});
