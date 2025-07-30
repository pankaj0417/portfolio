import express from "express";
import { sendMessage } from "../Controller/messageController.js";

const router = express.Router();

router.post("/sendmessage",sendMessage)

export default router;
