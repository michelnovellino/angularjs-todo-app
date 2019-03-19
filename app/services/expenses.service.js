 angular.module('expensesApp')

.value('route', 'http://localhost:3000/api')


.service('expensesServ', ['$http', '$q', 'route', function ($http, $q,route) {
    this.getExpenses = () => {
        var defered = $q.defer()
        var promise = defered.promise
  
        $http.get(`${route}/item`, {
        
        })
          .then(function (res) {
            defered.resolve(res)
          })
          .catch(function (res) {
            defered.reject(res)
          })
  
        return promise
      }

      this.createExpense = (data) => {
        var defered = $q.defer()
        var promise = defered.promise
  
        $http.post(`${route}/item`, data, {
        
        })
          .then(function (res) {
            defered.resolve(res)
          })
          .catch(function (res) {
            defered.reject(res)
          })
  
        return promise
      }
      this.editExpense = (data,id) => {
        var defered = $q.defer()
        var promise = defered.promise
  
        $http.put(`${route}/item/${id}`, data, {
        
        })
          .then(function (res) {
            defered.resolve(res)
          })
          .catch(function (res) {
            defered.reject(res)
          })
  
        return promise
      }

      this.deleteExpense = (id) => {
        var defered = $q.defer()
        var promise = defered.promise
  
        $http.delete(`${route}/item/${id}`, {
        
        })
          .then(function (res) {
            defered.resolve(res)
          })
          .catch(function (res) {
            defered.reject(res)
          })
  
        return promise
      }
  }]);