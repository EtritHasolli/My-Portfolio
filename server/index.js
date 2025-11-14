import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error(
    'Email credentials are not set. Please add EMAIL_USER and EMAIL_PASS to your .env file.',
  );
}

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: 'etrithasolli5@gmail.com',
      subject: `New portfolio contact from ${name}`,
      text: message,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res
      .status(500)
      .json({ success: false, error: error instanceof Error ? error.message : 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact form server running on http://localhost:${PORT}`);
});


