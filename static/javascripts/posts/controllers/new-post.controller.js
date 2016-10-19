(function() {
    'use strict';
    
    angular
        .module('thinkster.posts.controllers')
        .controller('NewPostController', NewPostController);
        
    NewPostController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Posts', '$location'];
    
    function NewPostController($rootScope, $scope, Authentication, Snackbar, Posts, $location) {
        var vm = this;
        
        vm.submit = submit;
        
        activate();
        
        function activate() {
            if (!Authentication.isAuthenticated()) {
                Snackbar.show('Palun logi töö lisamiseks sisse.');
                $location.url('/login');
            }
        }
        
        function submit() {
            $rootScope.$broadcast('post.created', {
                content: vm.content,
                author: {
                    username: Authentication.getAuthenticatedAccount().username
                }
            });
            
            //$scope.closeThisDialog();
        
            Posts.create(vm.content).then(createPostSuccessFn, createPostErrorFn);
            
            function createPostSuccessFn(data, status, headers, config) {
                Snackbar.show('Uus töö lisatud!');
                $location.url('/');
            }
            
            function createPostErrorFn(data, status, headers, config) {
                $rootScope.$broadcast('post.created.error');
                Snackbar.error(data.error);
            }
        }
    }
})();