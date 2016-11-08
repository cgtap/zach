(function() {
  var controllers, webApp,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  webApp = me.zach.webApp;

  controllers = webApp.controllers;

  controllers.MainController = (function() {
    MainController.prototype._anchorScrollService = null;

    MainController.prototype._expertiseService = null;

    MainController.prototype.projects = null;

    MainController.prototype.expertise = null;

    MainController.$inject = ['$scope', 'projectService', 'expertiseService', 'anchorScrollService', '$document'];

    function MainController($scope, projectService, expertiseService, anchorScrollService, $document) {
      this.scrollToProject = bind(this.scrollToProject, this);
      this._anchorScrollService = anchorScrollService;
      this.projects = projectService.getProjects();
      this.expertise = expertiseService.getExpertise();
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

    MainController.prototype.scrollToProject = function($event) {
      return this._anchorScrollService.scrollTo($event);
    };

    return MainController;

  })();

}).call(this);
