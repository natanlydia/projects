<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "first";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn){
    die("Connection failed " . mysqli_connect_errno());
}
//echo "Connected successfully";