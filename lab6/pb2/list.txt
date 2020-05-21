<?php
$servername = "localhost";
$username = "rdir2600";
$password = "rdir2600";
$dbname = "rdir2600";

$limit = $_REQUEST['limit'];
$skip = $_REQUEST['skip'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM clienti LIMIT $skip,$limit";
$sql2 = "SELECT count(*) as c from clienti";
$result = $conn->query($sql);
$count = $conn->query($sql2);
$conn->close();
$result->data_seek(0);
$count->data_seek(0);
$response = array();
$response[]=$count->fetch_assoc();
// echo json_encode($count->fetch_assoc());
// echo '||';
while($row = $result->fetch_assoc()) {
  // echo json_encode($row);
  // echo '==';
  $response[]=$row;
}
echo json_encode($response);
?>