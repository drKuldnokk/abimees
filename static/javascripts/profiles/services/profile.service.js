(function() {
    'use strict';
    
    angular
        .module('thinkster.profiles.services')
        .factory('Profile', Profile);
    
    Profile.$inject = ['$http'];
    
    function Profile($http) {
        
        var Pofile = {
            destroy : destroy,
            get : get,
            update : update
        }
        
        return Profile;
        
        function destroy(profile) {
            $http.delete('/api/v1/accounts/' + profile.id + '/')
        }
        
        function get(username) {
            return $http.get('/api/v1/accounts/' + username + '/');
        }
        
        function update(profile) {
            return $http.put('/api/v1/accounts/' + profile.username + '/', profile)
        }
    }
})();