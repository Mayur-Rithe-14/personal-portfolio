const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

exports.sendMessage = async (req, res) => {
  try {
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to database FIRST
    const contact = await Contact.create({name, email, message});

    // Send email in background (non-blocking)
    sendEmailAsync(name, email, message).catch((err) => {
      console.error("Email send error:", err.message);
    });

    return res.status(201).json({
      success: true,
      message: "Message saved! I'll get back to you soon.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact error:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to save message",
    });
  }
};

// Send email asynchronously
const sendEmailAsync = async (name, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // ← CHANGED FROM 465
      secure: false, // ← CHANGED FROM true (use STARTTLS instead of SSL)
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 5000,
      socketTimeout: 5000,
    });

    await transporter.sendMail({
      from: `"Your Portfolio" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    console.log("✅ Email sent to:", process.env.EMAIL);
  } catch (error) {
    console.error("❌ Email failed:", error.message);
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({createdAt: -1});
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
