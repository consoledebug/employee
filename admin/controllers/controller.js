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
    $scope.isShowAssign = false;
    $scope.selectedEmpolyee="";
    $scope.assigneList = [];
    $scope.selectedAssignee = '';
    $scope.availbleAssignes = [];

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

    //showing assigne form
    $scope.addNewAssign = function () {
        $scope.isShowAssign = true;
        $scope.availbleAssignes = [];
        angular.forEach($scope.employeeList,function(assigne){
            if($scope.selectedEmpolyee == assigne.id){
                assigne.isAvailble = false;
            }else{
                assigne.isAvailble = true;
            }
            $scope.availbleAssignes.push(assigne);
        });
    }

    //hide add assgin form
    $scope.cancelAddEmployee = function () {
        $scope.isShowAssign = false;
    }

    // get selected employee assignes
    $scope.updateSelectedEmployee = function() {
       console.log($scope.selectedEmpolyee);
       $scope.fetchEmployeeAssignes($scope.selectedEmpolyee);
    }

    // fetchSelected Employee Assignes
    $scope.fetchEmployeeAssignes = function(id){
        $scope.assigneList = [];
    }

}])