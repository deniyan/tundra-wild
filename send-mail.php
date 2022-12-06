<?php
if(isset($_POST['submit']))
{
	$name = $_POST['name'];
	$email = $_POST['email'];
	$comments = $_POST['comments'];
	$to = "deniyan.stoyanov@pgmett.com";

	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= 'From: '.$email;
	$message = "Name: ".$name."\r\nEmail: ".$email."\r\nComments:".$comments;
	if(mail($to, $message, $headers))
	{
		echo "Съобщението е изпратено, успешо!";
	}
	else
	{
		echo "Грешка, опитай по-късно";
	}
}
?>