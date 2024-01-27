import nodemailer from "nodemailer";
import fs from "fs";
import Mustache from "mustache";
import { NextResponse } from "next/server";

export default async function POST(req) {
  const { to, subject, data } = await req.json();
  console.log(to, subject, data);

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

  let template = fs.readFileSync("view/otp.html", "utf8");
  console.log(template);

  let mailOptions = {
    from: "lv.classonline@gmail.com",
    to,
    subject,
    html: Mustache.render(template, data),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
  }
}
