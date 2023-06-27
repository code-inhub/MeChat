import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ab0pbwt-shard-00-00.302xkm1.mongodb.net:27017,ac-ab0pbwt-shard-00-01.302xkm1.mongodb.net:27017,ac-ab0pbwt-shard-00-02.302xkm1.mongodb.net:27017/?ssl=true&replicaSet=atlas-9i49fi-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default connection;
