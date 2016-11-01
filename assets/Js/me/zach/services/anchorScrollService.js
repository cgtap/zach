(function() {
  var app, services,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  services = me.zach.webApp.services;

  app = me.zach.webApp.app;

  services.AnchorScrollService = (function() {
    function AnchorScrollService() {
      this.scrollTo = bind(this.scrollTo, this);
    }

    AnchorScrollService.prototype._initialize = function() {};

    AnchorScrollService.prototype.scrollTo = function($event) {
      return $('[data-project-link]').on('click', (function(_this) {
        return function() {
          var $offset, $target, $targetClass;
          $target = $(event.currentTarget);
          $targetClass = $target.attr('class');
          $offset = $('.block.' + $targetClass).position().top;
          return $('html, body').animate({
            scrollTop: offset - 60
          }, 600);
        };
      })(this));
    };

    return AnchorScrollService;

  })();

}).call(this);
