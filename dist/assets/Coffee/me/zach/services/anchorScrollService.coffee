services = me.zach.webApp.services
app = me.zach.webApp.app

class services.AnchorScrollService
# Initialization
  _initialize: () ->

  scrollTo: ($event) =>
    $target = $(event.currentTarget)
    targetClass = $target.attr('class')
    offset = $('.block.' + targetClass).position().top
    $('html, body').animate { scrollTop: offset - 100 }, 600
    false
