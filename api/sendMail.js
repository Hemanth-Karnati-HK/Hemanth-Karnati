const nodemailer = require('nodemailer');

export default async function (req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // your Gmail email address
                pass: process.env.GMAIL_PASS  // your Gmail password
            }
        });

        // Set up email data
        let mailOptions = {
            from: email,
            to: 'karnati.hemanth2123@gmail.com',
            subject: `Contact Form Submission: ${subject}`,
            text: `You have received a new message from your website contact form.\n\n` +
                  `Name: ${name}\n` +
                  `Email: ${email}\n` +
                  `Subject: ${subject}\n\n` +
                  `Message:\n${message}`
        };

        // Send mail with defined transport object
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Message sent successfully.' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send message.', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}
