// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();

// Approch 1:
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log(`ERROR: ${error}, Not being able to connect to the database`);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening at http://localhost:${process.env.PORT}`);
    });

  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
