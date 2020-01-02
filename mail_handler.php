<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $service = $_POST['services'];
        $msg = $_POST['subject'];

        $to = 'carlos.costa.pimentel@gmail.com'; // Receiver Email ID, Replace with your email ID
        $subject = 'Form Submission';
        $message = 'Name :'.$name."\n".'Service :'.$service."\n".'Wrote the following :'."\n\n".$msg;
        $headers = 'From: '.$email;

        if (mail($to, $subject, $message, $headers)) {
            echo '<h1>Sent Successfully! Thank you'.' '.$name.', We will contact you shortly!</h1>';
        } else {
            echo 'Something went wrong!';
        }
    }
