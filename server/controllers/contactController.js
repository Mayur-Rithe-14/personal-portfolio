const Contact = require("../models/contact");
const {Resend} = require("resend");
const getEmailHTML = require("../templates/emailTemplate");

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
    const htmlContent = getEmailHTML(name, email, message);

    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: htmlContent,
    });

    console.log("Email sent successfully to:", process.env.EMAIL);
  } catch (error) {
    console.error("Email failed:", error.message);
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
