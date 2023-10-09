import { Registration } from "../Models/Registration.js";

export class registrationController{
    static createRegistration = async (req, res) => {
        try {
            const { email } = req.body;
            const {eventId} = req.query;
            const existingRegistration = await Registration.findOne({ email, eventId });
            if (existingRegistration) {
                return res.render("registrationForm", { errorMessage: "Email is already registered for this event." });
            }
            const newRegistration = await Registration.create({...req.body,eventId});
            if (newRegistration) {
                return res.render("registrationForm", { errorMessage: "You are successfully registered." });
            }
        } catch (error) {
            return res.render("registrationForm", { succesMessage: "An error occurred." });
        }
    }

    
}

