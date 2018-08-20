MainRoot.controller("MainController",['$scope', '$rootScope', '$timeout','MainService', function($scope,$rootScope,$timeout,MainService){
    //Initialize 
    $scope.isShowEmployee =false;
    $scope.employeeDetails = {
        id: '',
        employeeId: '',
        name: '',
        designation: ''
    }
    $scope.selectedTab = "employee";
    $scope.employeeList = [];

    // initialize when page load
    // $scope.init = function(){
    //     $scope.fetchEmployees();
    // }

    //showing employee form
    $scope.addNewEmployee = function() {
        $scope.isShowEmployee = true;
    }

    //hide add employee form
    $scope.cancelAddEmployee = function () {
        $scope.resetEmployeeDetails();
        $scope.isShowEmployee = false;
    }

    // to save employee details in database
    $scope.addUpdateEmployee = function () {
        //save employeee.
        MainService.saveUpdateEmployee($scope.employeeDetails.id, $scope.employeeDetails.employeeId, $scope.employeeDetails.name, $scope.employeeDetails.designation).then(function (pRes) {
            if (pRes && pRes.data){
                $scope.isShowEmployee = false;
                $scope.fetchEmployees();
            }
        });
        $scope.resetEmployeeDetails();
    }

    //reset employee details
    $scope.resetEmployeeDetails = function(){
        $scope.employeeDetails = {
            id: '',
            employeeId: '',
            name: '',
            designation: ''
        }
    }

    //fetch employee list 
    $scope.fetchEmployees = function(){
        MainService.fetchEmployees().then(function (pRes) {
            if (pRes && pRes.data && pRes.data.employees) {
                // console.log(pRes.data.employees);
                $scope.employeeList = pRes.data.employees;
            }
        });
    }

    //fetching employee list
     $scope.fetchEmployees();

    //edit employee details
    $scope.editEmploye = function(employee){
      $scope.isShowEmployee = true;
      $scope.employeeDetails = {
          id: employee.id,
          employeeId: employee.employeeId,
          name: employee.name,
          designation: employee.designation
      }
    }


    //delete employee from list
    $scope.deleteEmploye = function (employe) {
        MainService.deleteEmployeeById(employe.id).then(function (pRes) {
            if (pRes && pRes.data) {
                $scope.fetchEmployees();
                $scope.employeeList.slice(employe.id,0);
            }
        });
    }

    // show selected tab
    $scope.updateSelectedTab = function(tabType){
        $scope.selectedTab = tabType;
    }




}])