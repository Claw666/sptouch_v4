var app = angular.module('angularApp',['ui.router']);

app.config(function($stateProvider){
  // An array of state definitions
  var states = [
    { 
      name: 'sort-group-1', 
      url: '/', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesA();
        }
      }
    },

    { 
      name: 'sort-group-2', 
      url: '/sort-group-2', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesB();
        }
      }
    },

    { 
      name: 'sort-group-3', 
      url: '/sort-group-3', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesC();
        }
      }
    },

    { 
      name: 'sort-group-4', 
      url: '/sort-group-4', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesD();
        }
      }
    },

    { 
      name: 'sort-group-5', 
      url: '/sort-group-5', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesE();
        }
      }
    },
    
    { 
      name: 'meetings', 
      url: '/meetings', 
      component: 'meetings',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getMeetingRooms();
        }
      }
    },
    
    { 
      name: 'transport', 
      url: '/transport', 
      component: 'transport'
      
    },
    
    { 
      name: 'info', 
      url: '/info', 
      component: 'info'
    },

    { 
      name: 'company', 
      // This state takes a URL parameter called personId
      url: '/companies/{companyId}', 
      component: 'company',
      // This state defines a 'person' resolve
      // It delegates to the PeopleService, passing the personId parameter
      resolve: {
        company: function(CompaniesService, $transition$) {
          return CompaniesService.getCompany($transition$.params().companyId);
        }
      }
    },

    { 
      name: 'meetingroom', 
      // This state takes a URL parameter called personId
      url: '/meetings/{companyId}', 
      component: 'meetingroom',
      // This state defines a 'person' resolve
      // It delegates to the PeopleService, passing the personId parameter
      resolve: {
        company: function(CompaniesService, $transition$) {
          return CompaniesService.getCompany($transition$.params().companyId);
        }
      }
    }


  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});