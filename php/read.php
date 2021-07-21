<?php
include 'database.php';
$products = [];

$sql = "SELECT * FROM subscription";
if($result = $db->query($sql))
{
    $i = 0;
	while($row = $result->fetch_assoc())
	{$products[$i]['emailId'] = $row['emailId'];
		$products[$i]['date'] = $row['date'];
		$products[$i]['id'] = $row['id'];
		$i++;
	}
	echo json_encode($products);
}
else
{
	http_response_code(404);
}