<?php
class Employee{
 
    // database connection and table name
    private $conn;
    private $table_name = "employee";
 
    // object properties
    public $id;
    public $name;
    public $employee_id;
    public $designation; 
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // fetch employee list
    function fetchEmployee(){ 
        // select all query
        $query = "SELECT
                     e.id, e.name, e.employee_id, e.designation, e.created
                FROM
                    " . $this->table_name . " e";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // create or update employee
    function createOrUpdateEmployee(){
        // sanitize
        // $this->id=htmlspecialchars(strip_tags($this->id));
        // $this->name=htmlspecialchars(strip_tags($this->name));
        // $this->employee_id=htmlspecialchars(strip_tags($this->employee_id));
        // $this->designation=htmlspecialchars(strip_tags($this->designation));  

        // query to insert record
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    name=:name, employee_id=:employee_id, designation=:designation";
        if($this->id){
            $query = "UPDATE 
                    " . $this->table_name . "
                SET
                    name=:name, employee_id=:employee_id, designation=:designation
                WHERE
                id = :id";;
        }
        // prepare query
        $stmt = $this->conn->prepare($query); 
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":employee_id", $this->employee_id);
        $stmt->bindParam(":designation", $this->designation);
        // $stmt->bindParam(":created", $this->created);
        if($this->id){
            $stmt->bindParam(":id", $this->id);
        }
        // echo $stmt; exit;
        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
        
    }

    // create or update employee
    function deleteEmployeeById(){
        // sanitize
        // $this->id=htmlspecialchars(strip_tags($this->id));
        // $this->name=htmlspecialchars(strip_tags($this->name));
        // $this->employee_id=htmlspecialchars(strip_tags($this->employee_id));
        // $this->designation=htmlspecialchars(strip_tags($this->designation));  

        // query to insert record
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        // echo 'ID'.$this->id;exit;
        // prepare query
        $stmt = $this->conn->prepare($query); 

        // bind values
        if($this->id){
            $stmt->bindParam(1, $this->id);
        }
        // echo $stmt; exit;
        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
        
    }
}