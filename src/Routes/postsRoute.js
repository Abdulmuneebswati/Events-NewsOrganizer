import  express  from "express";
import multer from "multer";
import { postsController } from "../Controllers/postsController.js";
import { adminAuth } from "../middleware/auth.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const postsRoutes = express.Router();

postsRoutes.get("/createPost",adminAuth,(req,res)=>{
    res.render("addPostForm");
})
postsRoutes.post('/createPost',adminAuth,upload.single('imageFile'), postsController.createPost);
postsRoutes.get("/",postsController.getPosts);
postsRoutes.get("/post/:id",postsController.getPost)



