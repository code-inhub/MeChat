import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb://${USERNAME}:${PASSWORD}@ac-ab0pbwt-shard-00-00.302xkm1.mongodb.net:27017,ac-ab0pbwt-shard-00-01.302xkm1.mongodb.net:27017,ac-ab0pbwt-shard-00-02.302xkm1.mongodb.net:27017/?ssl=true&replicaSet=atlas-9i49fi-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-file-${file.orginalname} `;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.orginalname}`,
    };
  },
});

const upload= multer({ storage });

export default upload;
