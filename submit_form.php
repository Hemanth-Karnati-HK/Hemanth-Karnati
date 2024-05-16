<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'karnati.hemanth2123@gmail.com';
    $subject = "Contact Form Submission: " . $subject;
    $body = "You have received a new message from the contact form on your website.\n\n" .
            "Here are the details:\n\n" .
            "Name: $name\n\n" .
            "Email: $email\n\n" .
            "Subject: $subject\n\n" .
            "Message:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
}
?>
