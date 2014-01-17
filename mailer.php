<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['emailAddr'];
$description = $_REQUEST['description'];
$from = "rssimon@alaska.edu";
$fromName = "Rijo Simon";
$subject = $fromName." needs a file.";
$message = "Hi ".$name.",\n\n".$fromName.", has requested the following file from you: \n\n".$description."\n\n Thanks,\n\nReq-A-File"
$header = "From: ".$from;
mail($email,$subject,$message,$header)
?>