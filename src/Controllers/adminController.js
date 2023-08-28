import jwt from "jsonwebtoken";
import { Admins, findAdminByEmail } from "../Models/Admin.js";
import { comparePassword, encodePassword } from "../utils/bcrypt.js";
import { handleException } from "../utils/exception.js";
import { Registration } from "../Models/Registration.js";
export class adminController{
    static createUser = async (req, res) => {
        try {
            const { email, name, password } = req.body;
                const existingAdmin = await findAdminByEmail(email);
                if (existingAdmin) {
                    handleException(res,409,{
                        message:"Email already Exists"
                    });
                }
                const hashPassword =  await encodePassword(password);
                const newUser = await Admins.create({ email, name, password:hashPassword });
                return res.status(201).json({
                    status: "success",
                    statusCode: "201",
                    message: "User Created Successfully"
                });
        } catch (error) {
                 handleException(res,500,error)
        }
    } 


    static loginAdmin = async (req, res) => {
        try {
            const { email, password } = req.body;            
            // Find the user based on the provided email
            const admin = await findAdminByEmail(email);
    
            if (!admin) { 
            return res.status(401).render("login", { errorMessage:"Admin Not Found" });
        }
            // Compare the provided password with the user's stored password
            const passwordMatch = await comparePassword(password,admin.password);
    
            if (!passwordMatch){
                 return  res.render("login",{errorMessage:"Invalid Credentials"});
                }
            // Generate a JWT token
            const token = jwt.sign({ adminId: admin._id },"8wbwmbf874983behbh" , { expiresIn: '1h' });
            req.session.token = token;
            return res.redirect("/api/admin/dashboard")
        } catch (error) {
            handleException(res,500,error);
            return res.status(401).render("login", { errorMessage:error.message });
        }
    }
    static getDashboard = async(req,res)=>{
        try {
            const registrations = await Registration.find()
    .sort({ createdAt: -1 });
    registrations.forEach((registration, index) => {
        registration.serialNumber = index + 1;
    });
            res.render("dashboard",{
                registrations
            })
        } catch (error) {
            // return  res.render("login",{errorMessage:"Invalid Credentials"});
            console.log(error);
        }
    }
}


