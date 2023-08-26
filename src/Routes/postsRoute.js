import  express  from "express";
import multer from "multer";
import { postsController } from "../Controllers/postsController.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



export const postsRoutes = express.Router();


postsRoutes.post("/createPost",upload.single('imageFile'),postsController.createPost);
postsRoutes.get("/",postsController.getPosts)
postsRoutes.get("/post/:id",postsController.getPost)





