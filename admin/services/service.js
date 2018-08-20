MainRoot.factory('MainService', ['$http', function ($http) {
     saveUpdateEmployee = function(id,employeeId,name,designation) {
         var _serializedData = $.param({
             id: id,
             employeeId: employeeId,
             name: name,
             designation: designation
         });
         var _responsePromise = $http({
             method: 'POST',
             url: "http://localhost/employee/api/modules/employee/createEmployee.php",
             data: _serializedData,
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         });
         return _responsePromise;
     },
     fetchEmployees = function () {
         var _responsePromise = $http({
             method: 'POST',
             url: "http://localhost/employee/api/modules/employee/readEmployee.php",
            //  data: _serializedData,
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         });
         return _responsePromise;
     },
     deleteEmployeeById = function (id) {
         var _serializedData = $.param({
             id: id
         });
         var _responsePromise = $http({
             method: 'POST',
             url: "http://localhost/employee/api/modules/employee/deleteEmployee.php",
              data: _serializedData,
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         });
         return _responsePromise;
     }
    return {
        saveUpdateEmployee: saveUpdateEmployee,
        fetchEmployees: fetchEmployees,
        deleteEmployeeById: deleteEmployeeById
    }
}]);