<?php
$servername = "localhost";
$username = "rdir2600";
$password = "rdir2600";
$dbname = "rdir2600";

$plecare = $_REQUEST['plecare'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM plecari where plecare = '$plecare'" or die(mysql_error());
$result = $conn->query($sql);
$conn->close();
$result->data_seek(0);
echo json_encode($result->fetch_all(1))
?>