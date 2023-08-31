<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $number = $_POST['number']; // <-- Missing semicolon here

  $subject = "New Contact Details from GraciaArt";
  $mailheader = "From: " . $name . "<" . $email . ">\r\n";
  $body = "Name: " . $name  . "\r\nNumber: ". $number . "\r\nEmail: " . $email . "\r\nMessage: " . $message;

  $recipient = "info@graziazuccolotto.com";

  if (mail($recipient, $subject, $body, $mailheader)) {
    // Email sent successfully
    $response = array(
      'status' => 'success',
      'message' => 'Your message was sent successfully. We will be in touch soon.'
    );
  } else {
    // Error occurred while sending email
    $response = array(
      'status' => 'error',
      'message' => 'Error occurred while submitting the form.'
    );
  }

  // Return the response as JSON
  header('Content-Type: application/json');
  echo json_encode($response);
  exit;
} else {
  // Handle case when form is accessed directly without POST method
  // Redirect or display an error message
}
?>
