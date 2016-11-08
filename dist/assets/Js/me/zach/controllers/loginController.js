(function() {
  var controllers, webApp;

  webApp = me.zach.webApp;

  controllers = webApp.controllers;

  controllers.LoginController = (function() {
    LoginController.$inject = ['$scope', '$rootScope'];

    function LoginController($scope) {}

    return LoginController;

  })();

}).call(this);
