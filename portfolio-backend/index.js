import express from "express";
import { connectDb } from "./Config/Db.js";
import cors from "cors";
import router from "./Router/messageRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

let PORT = 5000;
connectDb();

app.use(express.json());
app.use("/api/v1", router);

app.listen(PORT);
console.log(`Server is running on ${PORT}`);
