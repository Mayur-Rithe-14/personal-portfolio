// const Contact = require("../models/contact");
// const nodemailer = require("nodemailer");

// exports.sendMessage = async (req, res) => {
//   try {
//     const {name, email, message} = req.body;

//     const contact = await Contact.create({name, email, message});

//     // ✅ Respond immediately (prevents frontend freeze)
//     res.status(201).json({
//       success: true,
//       message: "Message sent successfully",
//       data: contact,
//     });

//     // ✅ Email runs in background (non-blocking)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     transporter
//       .sendMail({
//         from: process.env.EMAIL,
//         to: process.env.EMAIL,
//         subject: `New Portfolio Message from ${name}`,
//         html: `
//         <h2>New Message</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//       })
//       .catch((err) => console.error("Email error:", err));
//   } catch (error) {
//     console.error("Contact error:", error);

//     res.status(500).json({
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

    const contact = await Contact.create({name, email, message});

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Contact error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
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
    res.status(500).json({success: false, message: error.message});
  }
};
