(function () {
    'use strict';
    
    angular
        .module('thinkster.layout.controllers')
        .controller('IndexController', IndexController);
        
    IndexController.$inject = ['$scope', 'Authentication', 'Posts', 'Snackbar'];
    
    function IndexController($scope, Authentication, Posts, Snackbar) {
        var vm = this;
        
        vm.isAuthenticated = Authentication.isAuthenticated();
        vm.posts = [];
        
        activate();
        
        /** 
         * @name activate
         * @desc Actions to be performed when this controller is instantiated
         * @memberOf thinkster.layout.controllers.IndexController
         */
        function activate() {
            console.log("IndexController.activate");
            Posts.all().then(postsSuccessFn, postsErrorFn);
            
            $scope.$on('post.created', function(event, post) {
               vm.posts.unshift(post); 
            });
            
            $scope.$on('post.created.error', function() {
                vm.posts.shift();
            });
            
            function postsSuccessFn(data, status, headers, config) {
                console.log("posts arrived!");
                vm.posts = data.data;
            }
            
            function postsErrorFn(data, status, headers, config) {
                $snackbar.error(data.error);
            }
        }
    }
})();