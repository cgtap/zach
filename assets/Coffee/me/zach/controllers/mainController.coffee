webApp    = me.zach.webApp
controllers = webApp.controllers

class controllers.MainController

  @$inject = [
    '$scope'
    'projectService'
    'anchorScrollService'
    '$document'
  ]

  constructor: ($scope, projectService, anchorScrollService, $document) ->
    $scope.projects = projectService.getProjects()
    $scope.scrollTo = anchorScrollService.scrollTo()
    $scope.isScrolled = false

    $(document).on 'scroll', ->
      if $('header').outerHeight() < $(document).scrollTop()

        $scope.$apply ->
          $scope.isScrolled = true

      else

        $scope.$apply ->
          $scope.isScrolled = false
