(function() {
  var app, services,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  services = me.zach.webApp.services;

  app = me.zach.webApp.app;

  services.ProjectService = (function() {
    function ProjectService() {
      this.getProjects = bind(this.getProjects, this);
    }

    ProjectService.prototype._initialize = function() {};

    ProjectService.prototype.getProjects = function() {
      return [
        {
          id: 1,
          projectName: 'Commonwealth Charter Academy',
          role: 'Front-End Developer',
          desc: 'CCA is a K-12 public cyber charter school in Pennsylvania. ',
          linkHref: 'https://ccaeducate.me/',
          mobileImg: 'mobile-cca.png',
          desktopImg: 'laptop-cca.png',
          type: 'Education',
          agency: 'Andculture'
        }, {
          id: 2,
          projectName: 'Eliance Health Solutions',
          role: 'Front-End/Back-End Developer',
          desc: 'Eliance Health Solutions offers employers Lancaster General Health integrated group health products: medical benefits, wellness and occupational medicine. ',
          linkHref: 'http://eliancehealthsolutions.org/',
          mobileImg: 'mobile-ehs.png',
          desktopImg: 'laptop-ehs.png',
          type: 'Healthcare',
          agency: 'Andculture'
        }, {
          id: 3,
          projectName: 'Pinnacle Health',
          role: 'Front-End Developer',
          desc: 'Pinnacle Health is a top-rated healthcare system in south-central PA. ',
          linkHref: 'https://www.pinnaclehealth.org/',
          mobileImg: 'mobile-pinnacle.png',
          desktopImg: 'laptop-pinnacle.png',
          type: 'Healthcare',
          agency: 'Andculture'
        }, {
          id: 4,
          projectName: 'Mount Nittany Health',
          role: 'Front-End Developer',
          desc: 'Based in State College, Pennsylvania, Mount Nittany Health provides emergency and surgical services at its hospital. ',
          linkHref: 'http://www.mountnittany.org/',
          mobileImg: 'mobile-mnh.png',
          desktopImg: 'laptop-mnh.png',
          type: 'Healthcare',
          agency: 'Andculture'
        }, {
          id: 5,
          projectName: 'Mount Nittany Health Kids',
          role: 'Front-End Developer',
          desc: 'Mount Nittany Health Kids is an online source to learn about their team and offices, and to help you teach children about the importance of being healthy and what it’s like to go to the doctor’s office.',
          linkHref: 'http://kids.mountnittany.org/',
          mobileImg: 'mobile-mnhkids.png',
          desktopImg: 'laptop-mnhkids.png',
          type: 'Healthcare',
          agency: 'Andculture'
        }, {
          id: 6,
          projectName: 'U-GRO',
          role: 'Front-End Developer',
          desc: 'U-GRO is the leading childcare provider in Central PA that offers infant, toddler, preschool and before & after school programs at 11 locations.',
          linkHref: 'https://www.u-gro.com/',
          mobileImg: 'mobile-ugro.png',
          desktopImg: 'laptop-ugro.png',
          type: 'Education',
          agency: 'Andculture'
        }
      ];
    };

    return ProjectService;

  })();

}).call(this);
