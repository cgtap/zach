services = me.zach.webApp.services
app = me.zach.webApp.app

class services.ExpertiseService
# Initialization
  _initialize: () ->

# Public Methods
  getExpertise: =>
    [
      {
        type: 'idea'
        name: 'Collaboration'
      }
      {
        type: 'idea'
        name: 'Communication'
      }
      {
        type: 'ux'
        name: 'Wireframing'
      }
      {
        type: 'ux'
        name: 'Content Structure'
      }
      {
        type: 'ux'
        name: 'Design'
      }
      {
        type: 'development'
        name: 'Database'
      }
      {
        type: 'development'
        name: 'Front-End'
      }
      {
        type: 'development'
        name: 'Back-End' 
      }
    ]
