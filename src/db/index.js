import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

// DB IS IN ANOTHER CONTINENT

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGOEB connection FAILED.", error);
    process.exit(1);
  }
};

export default connectDB;
