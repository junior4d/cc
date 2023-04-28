<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'support@cheapcoders.net';
$subject = 'New message from ' . $name;
$message = "From: $name\n\nEmail: $email\n\nMessage: $message";
$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $message, $headers)) {
  http_response_code(200);
  echo 'Email sent successfully';
}
else {
  http_response_code(500);
  echo 'Error sending email';
}
?>
