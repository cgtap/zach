(function() {
  var app, services,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  services = me.zach.webApp.services;

  app = me.zach.webApp.app;

  services.ExpertiseService = (function() {
    function ExpertiseService() {
      this.getExpertise = bind(this.getExpertise, this);
    }

    ExpertiseService.prototype._initialize = function() {};

    ExpertiseService.prototype.getExpertise = function() {
      return [
        {
          type: 'idea',
          name: 'Collaboration'
        }, {
          type: 'idea',
          name: 'Communication'
        }, {
          type: 'ux',
          name: 'Wireframing'
        }, {
          type: 'ux',
          name: 'Content Structure'
        }, {
          type: 'ux',
          name: 'Design'
        }, {
          type: 'development',
          name: 'Database'
        }, {
          type: 'development',
          name: 'Front-End'
        }, {
          type: 'development',
          name: 'Back-End'
        }
      ];
    };

    return ExpertiseService;

  })();

}).call(this);
