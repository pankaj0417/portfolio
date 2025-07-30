import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected");
  } catch (error) {
    console.log("error");
    process.exit(1);
  }
};
