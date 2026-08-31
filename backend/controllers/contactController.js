const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Resend Error: RESEND_API_KEY is not set.");
      return res.status(500).json({
        success: false,
        message: "Email service configuration error.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["narmadakumavat2005@gmail.com"],
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend Error:", error.message || error);

      return res.status(500).json({
        success: false,
        message: error.message || "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Server Error:", error.message || error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong on the server.",
    });
  }
};

module.exports = { sendContactEmail };