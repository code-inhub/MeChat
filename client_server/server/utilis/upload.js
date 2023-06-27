import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";


const storage = new GridFsStorage({
  url: `mongodb://anshulrana:anshulrana@ac-ab0pbwt-shard-00-00.302xkm1.mongodb.net:27017,ac-ab0pbwt-shard-00-01.302xkm1.mongodb.net:27017,ac-ab0pbwt-shard-00-02.302xkm1.mongodb.net:27017/?ssl=true&replicaSet=atlas-9i49fi-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-file-${file.originalname} `;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });