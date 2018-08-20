<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../../lib/database.php';
include_once 'employee.php';
 
$database = new Database();
$db = $database->getConnection();
 
$employee = new Employee($db);
 
// get posted data
// $data = json_decode(file_get_contents("php://input"));
// echo 'afasffff'.$_POST['name'];exit;
// set product property values
$employee->id = $_POST['id'];
$employee->name = $_POST['name'];
$employee->employee_id = $_POST['employeeId'];
$employee->designation = $_POST['designation'];
$employee->created = date('Y-m-d H:i:s');
 
// create the product
if($employee->createOrUpdateEmployee()){
    echo '{';
        echo '"message": "employee was created."';
    echo '}';
}
 
// if unable to create the product, tell the user
else{
    echo '{';
        echo '"message": "Unable to create employee."';
    echo '}';
}
?>