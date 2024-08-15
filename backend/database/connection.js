import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("Error: MONGO_URI environment variable is not defined.");
    process.exit(1); // Exit the process with failure
  }

  mongoose
    .connect(uri, {
      dbName: "MINE",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Some error occurred while connecting to the database:", err);
      process.exit(1); // Exit the process with failure
    });
};
