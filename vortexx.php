<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight request
    http_response_code(200);
    exit();
}

include 'vortexxdbconnect.php';
$objDb = new Dbconnect();
$conn = $objDb->connect();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;
    $subject = $data->subject;
    $message = $data->message;
    $service = $data->service;

    $stmt = $conn->prepare("INSERT INTO contact (name, email, phone, subject, message, service ) VALUES (:name, :email, :phone, :subject, :message, :service)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':subject', $subject);
    $stmt->bindParam(':message', $message);
    $stmt->bindParam(':service', $service);

    if ($stmt->execute()) {
        // Send email using PHPMailer
        $mail = new PHPMailer(true);
        $email_body  = "Name: $name\n";
        $email_body .= "Email: $email\n";
        if ($phone)   $email_body .= "Phone: $phone\n";
        if ($service) $email_body .= "Service Interested In: $service\n";
        $email_body .= "\nMessage:\n$message";

        $emailSent = false;
        $emailError = '';
        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'thevortexxinfo@gmail.com';
            $mail->Password   = 'onpwqvhtekxhqwyn';
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;
            $mail->SMTPDebug = 2;
            $mail->Debugoutput = 'error_log';

            $mail->setFrom('thevortexxinfo@gmail.com', 'Website Contact');
            $mail->addAddress('thevortexxinfo@gmail.com');
            $mail->addReplyTo($email, $name);

            $mail->isHTML(false);
            $mail->Subject = "Contact Form: $subject";
            $mail->Body    = $email_body;

            $mail->send();
            $emailSent = true;
        } catch (Exception $e) {
            $emailError = $mail->ErrorInfo;
        }
        echo json_encode([
            "db" => "User added successfully",
            "email" => $emailSent ? "Message sent successfully!" : ("Mailer Error: " . $emailError)
        ]);
    } else {
        echo json_encode(["db" => "Failed to add user"]);
    }
}
