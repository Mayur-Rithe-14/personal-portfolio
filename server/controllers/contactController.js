const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

exports.sendMessage = async (req, res) => {
  try {
    const {name, email, message} = req.body;
    const contact = await Contact.create({name, email, message});

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `<h2>New Message from ${name}</h2><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({success: false, message: error.message});
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
