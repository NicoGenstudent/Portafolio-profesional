<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Load PHPMailer via Composer
require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$receiving_email_address = $_ENV['RECEIVING_EMAIL_ADDRESS'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email address.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Use Gmail's SMTP server (replace with your credentials)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['EMAIL_USERNAME']; // From .env
        $mail->Password = $_ENV['EMAIL_PASSWORD']; // From .env
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, "Portfolio Contact Form");
        $mail->addAddress($receiving_email_address);
        $mail->isHTML(false);
        $mail->Subject =  "Contact from portfolio: $subject";
        $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";

        $mail->send();
        http_response_code(200);
        echo "OK";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(403);
    echo "Invalid request method.";
}
?>
