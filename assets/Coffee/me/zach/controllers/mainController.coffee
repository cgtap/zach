webApp    = me.zach.webApp
controllers = webApp.controllers

class controllers.MainController

  _anchorScrollService: null
  _expertiseService: null

  projects: null
  expertise: null

  @$inject = [
    '$scope'
    'projectService'
    'expertiseService'
    'anchorScrollService'
    '$document'
  ]

  constructor: ($scope, projectService, expertiseService, anchorScrollService, $document) ->
    @_anchorScrollService = anchorScrollService

    @projects = projectService.getProjects()
    @expertise = expertiseService.getExpertise()
    $scope.isScrolled = false

    $(document).on 'scroll', ->
      if $('header').outerHeight() < $(document).scrollTop()

        $scope.$apply ->
          $scope.isScrolled = true

      else

        $scope.$apply ->
          $scope.isScrolled = false

  scrollToProject: ($event) =>
    @_anchorScrollService.scrollTo $event
