import { adminController } from "../Controllers/adminController.js";
import  express  from "express";
import { adminAuth } from "../middleware/auth.js";

export const adminRoutes = express.Router();

adminRoutes.post("/create",adminController.createUser);
adminRoutes.get("/login",(req,res)=>{
    res.render("login")
})
adminRoutes.post("/login",adminController.loginAdmin);
adminRoutes.get("/dashboard",adminAuth,adminController.getDashboard);
// adminRoutes.post("/dashboard",adminAuth,adminController.getDashboard);

