// const Contact = require("../models/contact");
// const nodemailer = require("nodemailer");

// exports.sendMessage = async (req, res) => {
//   try {
//     const {name, email, message} = req.body;

//     const contact = await Contact.create({name, email, message});

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: process.env.EMAIL,
//       subject: `New Portfolio Message from ${name}`,
//       html: `
//         <h2>New Message Received</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//       data: contact,
//     });
//   } catch (error) {
//     console.error("Contact error:", error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// exports.getMessages = async (req, res) => {
//   try {
//     const messages = await Contact.find().sort({createdAt: -1});
//     res.status(200).json({
//       success: true,
//       count: messages.length,
//       data: messages,
//     });
//   } catch (error) {
//     res.status(500).json({success: false, message: error.message});
//   }
// };

const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

exports.sendMessage = async (req, res) => {
  try {
    const {name, email, message} = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to database
    const contact = await Contact.create({name, email, message});

    // Configure email transporter with 'service' instead of host/port
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection before sending
    await transporter.verify();

    // Send email
    const mailOptions = {
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
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
      data: contact,
    });
  } catch (error) {
    console.error("📧 Contact error:", error.message);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send message",
    });
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
