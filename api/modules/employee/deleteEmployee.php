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
 
// create the product
if($employee->deleteEmployeeById()){
    echo '{';
        echo '"message": "employee deleted successfully."';
    echo '}';
}
 
// if unable to create the product, tell the user
else{
    echo '{';
        echo '"message": "Unable to delete employee."';
    echo '}';
}
?>