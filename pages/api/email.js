import nodemailer from "nodemailer";
import fs from "fs";
import Mustache from "mustache";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, data } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let template = fs.readFileSync("view/otp.html", "utf8");

    let mailOptions = {
      from: "lv.classonline@gmail.com",
      to,
      subject,
      html: Mustache.render(template, data),
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
