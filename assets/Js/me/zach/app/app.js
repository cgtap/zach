(function() {
  var app, controllers, directives, services, webApp;

  webApp = me.zach.webApp;

  controllers = webApp.controllers;

  services = webApp.services;

  directives = webApp.directives;

  app = webApp.app = angular.module('webApp', ['angular.filter', 'ngRoute', 'webApp.controllers', 'webApp.services']);

  angular.module('webApp.controllers', []).controller('mainController', controllers.MainController);

  angular.module('webApp.services', []).service('projectService', services.ProjectService).service('anchorScrollService', services.AnchorScrollService);

  app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: '/home.html',
        controller: 'mainController',
        controllerAs: 'con'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
