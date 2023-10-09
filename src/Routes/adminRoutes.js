import { adminController } from "../Controllers/adminController.js";
import  express  from "express";
import { adminAuth } from "../middleware/auth.js";

export const adminRoutes = express.Router();

adminRoutes.post("/create",adminController.createUser);
adminRoutes.get("/login",(req,res)=>{
    res.render("login")
})
adminRoutes.post("/login",adminController.loginAdmin);
adminRoutes.get("/dashboard",adminController.getDashboard);
// adminRoutes.post("/dashboard",adminAuth,adminController.getDashboard);
adminRoutes.get("/events/:id",adminController.getMembers);
adminRoutes.post("/teams",adminController.createTeam);
adminRoutes.patch("/teams/:id/:teamName",adminController.addMember);

adminRoutes.get("/teams/create/:eventId",adminController.showCreateTeamPage);
adminRoutes.get("/players/:id",adminController.showPlayers);



