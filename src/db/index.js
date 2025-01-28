import mongoose from "mongoose";
import { DBNAME } from "./../constant.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const Instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DBNAME}`
    );

    console.log(
      `\n MongDB Connected !! DB Host:- ${Instance.connection.host} `
    );
  } catch (error) {
    console.log(`MONGODB Connection error:- `, error);
    process.exit(1);
  }
};

export default connectDB;
