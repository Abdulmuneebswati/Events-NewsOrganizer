
import express from "express";
import { registrationController } from "../Controllers/registrationController.js";

export const registrationRoute = express.Router();

registrationRoute.get("/",(req,res)=>{
    const {eventId} = req.query;
    if (eventId) {
        return res.render("registrationForm",{
            eventId
        });
    }
});
registrationRoute.post("/",registrationController.createRegistration)