(function() {
    'use strict';
    
    angular
        .module('thinkster.posts.controllers')
        .controller('PostController', PostController);
    
    PostController.$inject = ['$scope'];
    
    function PostController($scope) {
        var vm = this;
        
        vm.createdDate = createdDate;
        vm.createdTime = createdTime;
        
        function createdDate () {
            var d = new Date($scope.post.created_at);
            return getDate(d);
        }
        
        function createdTime () {
            var d = new Date($scope.post.created_at);
            return getTime(d);
        }
        
        function getDate(_dateTime) {
            return _dateTime.getMonth() + "/" + _dateTime.getDate() + "/" + _dateTime.getFullYear();
        }
        
        function getTime(_dateTime) {
            var hours = _dateTime.getHours();
            var minutes = _dateTime.getMinutes();
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes;
            return strTime;
        }
    }
})();