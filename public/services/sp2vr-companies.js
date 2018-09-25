angular.module('angularApp').service('CompaniesService', function($http) {
  var service = {
    getAllCompanies: function() {
      return $http.get('/sp2vr/sort-group-all', { cache: true }).then(function(resp) {
        return resp.data;
      });

    },
    getCompaniesA: function() {
      return $http.get('/sp2vr/sort-group-1', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesB: function() {
      return $http.get('/sp2vr/sort-group-2', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesC: function() {
      return $http.get('/sp2vr/sort-group-3', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesD: function() {
      return $http.get('/sp2vr/sort-group-4', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesE: function() {
      return $http.get('/sp2vr/sort-group-5', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getMeetingRooms: function() {
      return $http.get('/sp2vr/meetings', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompany: function(id) {
      function companyMatchesParam(company) {
        return company._id === id;
      }
      
      return service.getAllCompanies().then(function (companies) {
        return companies.find(companyMatchesParam);
      });
    }

  }

  return service;
})
