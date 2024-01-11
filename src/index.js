import dotenv from "dotenv";

import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.on("error", () => console.log("[ERROR]", error));

    app.listen(process.env.PORT || 8000, () =>
      console.log(`⚙️ Server running at port http://localhost:${process.env.PORT}`)
    );
  })
  .catch((error) => console.log(`[FAILED] MongoDB connection failed.`, error));

/*
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("[ERROR] in connecting to the server.");
      throw error;
    });

    app.listen(process.env.PORT, (port) => {
      console.log(`Connecting to port: http://localhost:${port}`);
    });
  } catch (error) {
    console.log("[ERROR]: ", error);
    throw error;
  }
})();
*/
