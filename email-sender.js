const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password
    },
});

// Email options
const mailOptions = {
    from: "your-email@gmail.com", // Replace with your email
    to: "your-email@gmail.com", // Replace with the recipient's email
    subject: "Test Email",
    text: "Hello, this is a test email from Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});
