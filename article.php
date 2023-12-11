<?php
// Replace these with your own MySQL server details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "lunarark_db";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
