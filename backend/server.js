// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();


const allowedOrigins = [
  'http://localhost:5500', // For local development
  'http://127.0.0.1:5500', // For local development (alternative localhost address)
  'https://nicogenstudent.github.io/Portafolio-profesional', // For production
  'https://nicogenstudent.github.io' // For testing with GitHub pages
]

app.use(cors(
    {origin: function (origin, callback) {
      console.log('Incoming Origin: ', origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      }
      else {
        console.error(`Not allowed by CORS: ${origin}`);
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    }}
));
app.use(express.json());

// Endpoint to handle contact form submissions
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME, // Your Gmail address
      pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
    },
  });

  // Email options
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USERNAME}>`,
    to: process.env.RECEIVING_EMAIL_ADDRESS, // Your personal email
    subject: `Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    return res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
});

app.use(express.static('.'));


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});