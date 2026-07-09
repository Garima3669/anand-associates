const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    let { name, email, phone, service, message } = req.body;

    // Trim all fields
    name = name?.trim();
    email = email?.trim().toLowerCase();
    phone = phone?.trim();
    service = service?.trim();
    message = message?.trim();

    // Check empty fields
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Name Validation
    const nameRegex = /^[A-Za-z.\s]+$/;

    if (!nameRegex.test(name)) {
      return res.status(400).json({
        success: false,
        message: "Name can contain only alphabets, spaces and dots.",
      });
    }

    // Email Validation
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Phone Validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit Indian mobile number.",
      });
    }

    // Message Validation
    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must contain at least 10 characters.",
      });
    }

    // Save Contact
    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
      data: contact,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

module.exports = {
  createContact,
};