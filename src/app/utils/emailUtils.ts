import nodemailer from "nodemailer";
import { EMAIL, PASSWORD, SERVICE } from "../config/email";
import Mail from "nodemailer/lib/mailer";

// Email configuration
const transporter = nodemailer.createTransport({
    service: SERVICE, // You can use any email service
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
});
export const sendEmail = async (subject: string, text: string) => {
    const mailOptions: Mail.Options = {
        from: EMAIL,
        to: EMAIL,
        subject,
        text
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}