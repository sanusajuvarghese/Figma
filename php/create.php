<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['emailId']) === '' )
	{
		return http_response_code(400);
	}
    $emailId = mysqli_real_escape_string($db, trim($request['emailId']));
	
$val= date("Y-m-d");
    
    $sql = "INSERT INTO subscription (emailId,date) VALUES ('$emailId','$val')";
      
	if($db->query($sql))
	{
		http_response_code(200);
		$user = [
		'emailId' =>  $emailId
		];
		echo json_encode($user);
	}
	else
	{
		http_response_code(422);
	}
}