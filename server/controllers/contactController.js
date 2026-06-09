const Contact = require("../models/contact");
const {Resend} = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendMessage = async (req, res) => {
  try {
    const {name, email, message} = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to database
    const contact = await Contact.create({name, email, message});

    // Send email in background
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

const sendEmailAsync = async (name, email, message) => {
  try {
    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`, // Default Resend sender
      to: process.env.EMAIL, // Your email
      replyTo: email, // Visitor's email
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
          <h2 style="color: #333;">New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-left: 4px solid #007bff;">${message}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Reply directly to this email to respond to ${name}</p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully to:", process.env.EMAIL);
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
