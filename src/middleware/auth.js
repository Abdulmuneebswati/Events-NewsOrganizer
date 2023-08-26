import jwt from "jsonwebtoken"
import { Admins } from "../Models/Admin.js";

export const adminAuth = async (req, res, next) => {
    const { token } = req.session;
    if (!token) {
        req.flash("errorMessage", "Unauthorized Access");
        return res.redirect("/api/admin/login");
    }

    try {
        const decoded = jwt.verify(token, '8wbwmbf874983behbh');
        const user = await Admins.findOne({ _id: decoded.adminId }); // Modify this line to use findOne
        if (!user) {
            return res.redirect("/api/admin/login");
        }else{
            next();
        }
    } catch (error) {
        req.flash("errorMessage", "Unauthorized Access");
        return res.redirect("/api/admin/login");
    }
}
