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
      var $target, offset, targetClass;
      $target = $(event.currentTarget);
      targetClass = $target.attr('class');
      offset = $('.block.' + targetClass).position().top;
      $('html, body').animate({
        scrollTop: offset - 100
      }, 600);
      return false;
    };

    return AnchorScrollService;

  })();

}).call(this);
