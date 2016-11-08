(function() {
  var app, services;

  services = me.zach.webApp.services;

  app = me.zach.webApp.app;

  services.anchorScrollService = (function() {
    function anchorScrollService() {}

    anchorScrollService.prototype._initialize = function() {};

    anchorScrollService.scrollTo = function(eID) {
      var i;
      var currentYPosition, distance, elmYPosition, i, leapY, results, speed, startY, step, stopY, timer;
      startY = currentYPosition();
      stopY = elmYPosition(eID);
      distance = stopY > startY ? stopY - startY : startY - stopY;
      currentYPosition = function() {
        if (self.pageYOffset) {
          return self.pageYOffset;
        }
        if (document.documentElement && document.documentElement.scrollTop) {
          return document.documentElement.scrollTop;
        }
        if (document.body.scrollTop) {
          return document.body.scrollTop;
        }
        return 0;
      };
      elmYPosition = function(eID) {
        var elm, node, y;
        elm = document.getElementById(eID);
        y = elm.offsetTop;
        node = elm;
        while (node.offsetParent && node.offsetParent !== document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        }
        return y;
      };
      if (distance < 100) {
        scrollTo(0, stopY);
        return;
      }
      speed = Math.round(distance / 100);
      if (speed >= 20) {
        speed = 20;
      }
      step = Math.round(distance / 25);
      leapY = stopY > startY ? startY + step : startY - step;
      timer = 0;
      if (stopY > startY) {
        i = startY;
        while (i < stopY) {
          setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
          leapY += step;
          if (leapY > stopY) {
            leapY = stopY;
          }
          timer++;
          i += step;
        }
        return;
      }
      i = startY;
      results = [];
      while (i > stopY) {
        setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
        leapY -= step;
        if (leapY < stopY) {
          leapY = stopY;
        }
        timer++;
        results.push(i -= step);
      }
      return results;
    };

    return anchorScrollService;

  })();

}).call(this);
