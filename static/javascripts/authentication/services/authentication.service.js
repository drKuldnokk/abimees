/**
* Authentication
* @namespace thinkster.authentication.services
*/
(function () {
  'use strict';
  
  angular
    .module('thinkster.authentication.services')
    .factory('Authentication', Authentication);
    
  Authentication.$inject = ['$cookies', '$http', '$rootScope'];
  
  /**
  * @namespace Authentication
  * @returns {Factory}
  */
  function Authentication($cookies, $http, $rootScope) {
    /**
    * @name Authentication
    * @desc The Factory to be returned
    */
    var Authentication = {
        login: login,
        register: register,
        logout: logout,
        getAuthenticatedAccount: getAuthenticatedAccount,
        setAuthenticatedAccount: setAuthenticatedAccount,
        isAuthenticated: isAuthenticated,
        unauthenticate: unauthenticate
    };
    
    return Authentication;
    
    ////////////////////
    
    /**
    * @name register
    * @desc Try to register a new user
    * @param {string} username The username entered by the user
    * @param {string} password The password entered by the user
    * @param {string} email The email entered by the user
    * @returns {Promise}
    * @memberOf thinkster.authentication.services.Authentication
    */
    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);
    }
    
    function registerSuccessFn(data, status, headers, config) {
        Authentication.login(data.data.email, data.data.password);
    }
    
    function registerErrorFn(data, status, headers, config) {
        console.error("register error");
    }
    
    /**
     * @name login
     * @desc Try to log in with email 'email' and password 'password'
     * @param {string} email The email entered by the user
     * @param {string} password The password entered by the user
     * @returns Promise}
     * @memberOf thinkster.authentication.services.Authentication
     */
    function login(email, password) {
        return $http.post('/api/v1/auth/login/', {
            email: email, password: password
        }).then(loginSuccessFn, loginErrorFn);
        
        function loginSuccessFn(data, status, headers, config) {
            Authentication.setAuthenticatedAccount(data.data);
            
            if ($rootScope.previousPath != undefined) {
                window.location = $rootScope.previousPath;
            } else {
                window.location = "/";
            }
        }
        
        function loginErrorFn(data, status, headers, config) {
            console.error('login error');
        }
    }
    
    /**
     * @name getAuthenticatedAccount
     * @desc Return the currently authenticated account
     * @returns {object|undefined} Account if authenticated, else 'undefined'
     * @memberOf thinkster.authentication.services.Authentication
     */
    function getAuthenticatedAccount() {
        if (!$cookies.authenticatedAccount) {
            return;
        }
        
        return JSON.parse($cookies.authenticatedAccount);
    }
    
    /**
     * @name isAuthenticated
     * @desc Check if the current user is authenticated
     * @returns {boolean} True if user is authenticated, else false.
     */
    function isAuthenticated() {
        return !!$cookies.authenticatedAccount;
    }
    
    /**
     * 
     */
    function setAuthenticatedAccount(account) {
        $cookies.authenticatedAccount = JSON.stringify(account);
    }
    
    /**
     *
     */
    function unauthenticate() {
        delete $cookies.authenticatedAccount;
    }
    
    function logout() {
        return $http.post('/api/v1/auth/logout/')
            .then(logoutSuccessFn, logoutErrorFn);
            
        function logoutSuccessFn(data, status, headers, config) {
            Authentication.unauthenticate();
            window.location = "/";
        }
        
        function logoutErrorFn() {
            console.error("logout error");
        }
    }
  } 
})();