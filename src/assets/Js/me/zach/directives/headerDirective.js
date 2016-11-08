(function() {
  var app, directives;

  directives = me.zach.webApp.directives;

  app = me.zach.webApp.app;

  directives.HeaderDirective = (function() {
    function HeaderDirective() {
      this._initialize();
    }

    HeaderDirective.prototype._initialize = function() {
      return console.log('test');
    };

    return HeaderDirective;

  })();

}).call(this);
