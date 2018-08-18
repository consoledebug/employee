<?php
$usr = "root";
$pwd = "";
$db = "sitedb";
$host = "localhost";
$con = mysqli_connect($host,$usr,$pwd,$db);
if(mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}