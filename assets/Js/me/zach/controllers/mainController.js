(function() {
  var controllers, webApp;

  webApp = me.zach.webApp;

  controllers = webApp.controllers;

  controllers.MainController = (function() {
    MainController.$inject = ['$scope', 'projectService', 'anchorScrollService', '$document'];

    function MainController($scope, projectService, anchorScrollService, $document) {
      $scope.projects = projectService.getProjects();
      $scope.scrollTo = anchorScrollService.scrollTo();
      $scope.isScrolled = false;
      $(document).on('scroll', function() {
        if ($('header').outerHeight() < $(document).scrollTop()) {
          return $scope.$apply(function() {
            return $scope.isScrolled = true;
          });
        } else {
          return $scope.$apply(function() {
            return $scope.isScrolled = false;
          });
        }
      });
    }

    return MainController;

  })();

}).call(this);
