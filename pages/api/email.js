import nodemailer from "nodemailer";
import fs from "fs";
import Mustache from "mustache";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, data } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "lv.classonline@gmail.com",
        pass: "jimx xxbu qccw cabh",
      },
    });

    const template = fs.readFileSync("public/otp.html", "utf8");

    let mailOptions = {
      from: "lv.classonline@gmail.com",
      to,
      subject,
      html: Mustache.render(template, data),
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
