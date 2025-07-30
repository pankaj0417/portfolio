import Message from "../Modal/messageSchema.js";
import { sendEmail } from "../utils/Mailer.js";
import dotenv from "dotenv";
dotenv.config();

export const sendMessage = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    const myemail = process.env.MYEMAIL_SERVICE;

    await Message.create({ name, email, msg });

    const subject = `New message from ${name}`;
    const text = `Sender: ${email}\n\nMessage:\n${msg}`;
    const html = `
      <h2>New Message Received</h2>
      <p><strong>Sender:</strong> ${email}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Message:</strong></p>
      <p>${msg.replace(/\n/g, "<br>")}</p>
    `;

    await sendEmail(myemail,subject,text,html);

    res.status(200).json({ message: "message sent successfully." });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};
