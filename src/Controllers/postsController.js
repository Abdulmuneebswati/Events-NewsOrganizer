import { Posts } from "../Models/Posts.js";
import admin from "../db/firebase/firebaseConfig.js";





export class postsController{
    static createPost = async(req,res)=>{
        try {
            const imageFile = req.file;
            const bucket = admin.storage().bucket(); // No need to pass the URL here
            const filename = `storage/${imageFile.originalname}`; // Store in the 'storage' folder
            const file = bucket.file(filename);
            const photoURL = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(filename)}?alt=media`;
            const stream = file.createWriteStream(); // Create a write stream to upload the file
            stream.end(imageFile.buffer); // Write the buffer to the stream
            const newPost = await Posts.create({ ...req.body, imageUrl: photoURL });
            if (newPost) {
                res.send("post created successfully");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Error creating post");
        }  
    }


    static getPosts = async(req,res)=>{
        try {
            const {type} = req.query;
            if (!type) {
                const posts = await Posts.find();
                res.render("eventsandnews",{posts});
            }else if(type){
                const posts = await Posts.find({type})
                console.log(posts,"i am " + type);
                res.render("eventsandnews",{posts});
            }
        } catch (error) {
            console.log(error);
        }
    }

    static getPost = async(req,res)=>{
        try {
            let showButton = false;
            const {id} = req.params;
            const post = await Posts.findById(id);
            if (post.type === "event") {
                showButton = true;
            }
            
            res.render("post",{post,showButton});
        } catch (error) {
            console.log(error);
        }
    }
}