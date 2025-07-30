import message from "../Modal/messageSchema.js";
import {sendEmail} from "../utils/Mailer.js";
import dotenv from "dotenv";
dotenv.config();

export const sendMessage = async (req, res) => {
  try {
    const { name,email,msg } = req.body;
    const myemail=process.env.MYEMAIL_SERVICE;

    await message.create({ name, email, msg });
    await sendEmail(myemail,`Sender name: ${name}`, `message: ${msg}`);

    res.status(200).json({ message: "message sent successfully." });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
  
};
