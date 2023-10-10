import  express  from "express";
import  {matchController}  from "../Controllers/matchController.js";
import { adminAuth } from "../middleware/auth.js";



export const matchRoutes = express.Router();

matchRoutes.get("/create/:eventId",matchController.showCreatePage);
matchRoutes.post("/create",matchController.create);
matchRoutes.get("/",matchController.showMatches);
matchRoutes.get("/eventMatches/:eventId",matchController.showEventMatches);




