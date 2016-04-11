cooking.factory('userAuthService',
  ['Auth',
  function(Auth) {

    userAuthService = {};

    // devise actions
    userAuthService.login = function(creds) {
      var config = { headers: { 'X-HTTP-Method-Override': 'POST' } }
      return Auth.login(creds, config);
    };

    userAuthService.logout = function() {
      var config = { headers: { 'X-HTTP-Method-Override': 'DELETE' } }
      return Auth.logout(config);
    };

    userAuthService.register = function(creds) {
      var config = { headers: { 'X-HTTP-Method-Override': 'POST' } }
      return Auth.register(creds, config);
    };

    userAuthService.edit = function(creds) {
      var config = { headers: { 'X-HTTP-Method-Override': 'PATCH' } }
      return Auth.register(creds, config);
    };

    // get current user
    userAuthService.getCurrentUser = function() {
      return Auth.currentUser();
    };

    return userAuthService;

  }]);