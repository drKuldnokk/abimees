(function () {
  'use strict';
  
  angular
    .module('thinkster.routes')
    .config(config);
    
  config.$inject = ['$routeProvider'];
  
  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
        controller: 'RegisterController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: 'static/templates/authentication/login.html'
    }).when('user/:username', {
        controller: 'ProfileController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/profiles/profile.html'
    }).when('/new_job', {
        templateUrl: '/static/templates/layout/new_job.html'
    }).when('/how_does_it_work', {
        templateUrl: '/static/templates/layout/how_does_it_work.html'
    }).when('/', {
        controller: 'IndexController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/layout/index.html'
    }).otherwise('/');
  }
})();