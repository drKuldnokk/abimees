(function () {
  'use strict';
    
  angular
    .module('thinkster', [
      'thinkster.config',
      'thinkster.routes',
      'thinkster.authentication',
      'thinkster.layout',
      'thinkster.posts',
      'thinkster.utils',
      'thinkster.profiles'
    ]);
  
  angular
    .module('thinkster.config', []);
    
  angular
    .module('thinkster.routes', ['ngRoute']);
    
  angular
    .module('thinkster')
    .run(run);
    
  run.$inject = ['$http', '$rootScope'];
  
  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http, $rootScope) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
    $rootScope.$on('$routeChangeStart', function(next, current) {
        if (location.pathname != "/login" && location.pathname != "/register") {
            $rootScope.previousPath = location.pathname;
        }
    });
  }
})();