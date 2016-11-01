services = me.zach.webApp.services
app = me.zach.webApp.app

class services.AnchorScrollService
# Initialization
  _initialize: () ->

  scrollTo: ($event) =>
    $('[data-project-link]').on 'click', =>
      $target = $(event.currentTarget)
      $targetClass = $target.attr('class')
      $offset = $('.block.' + $targetClass).position().top
      $('html, body').animate { scrollTop: offset - 60 }, 600
