webApp = me.zach.webApp
controllers = webApp.controllers
services = webApp.services
directives = webApp.directives

app = webApp.app = angular.module 'webApp', [
  'angular.filter'
  'ngRoute'
  'webApp.controllers'
  'webApp.services'
]

# Controllers
angular.module 'webApp.controllers', []
  .controller 'mainController', controllers.MainController

# Services
angular.module 'webApp.services', []
  .service 'projectService', services.ProjectService
  .service 'anchorScrollService', services.AnchorScrollService
  .service 'expertiseService', services.ExpertiseService


app.config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider
      .when '/', {
        templateUrl: '/home.html'
        controller: 'mainController'
        controllerAs: 'con'
      }
      .otherwise {
        redirectTo:'/'
      }
]
