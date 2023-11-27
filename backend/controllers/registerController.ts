import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AdminModel, { AdminModelAttributes } from "../models/adminsModel";

export const postRegistration = async (req: Request, res: Response): Promise<void> => {
    try {
        const { fullName, email, admin_password, isAdmin } = req.body;
        const alreadyExistsAdmin = await AdminModel.findOne({ where: { email } });
        if (alreadyExistsAdmin) {
            res
                .status(409)
                .json({ message: "Admin with this email already exists." });
            return;
        }
        if (!isAdmin) {
            res
                .status(400)
                .json({ message: "Cannot set isAdmin to true" });
            return;
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(admin_password, saltRounds);
        const newAdmin = await AdminModel.create({
            fullName,
            email,
            admin_password: hashedPassword,
            isAdmin: false
        } as AdminModelAttributes); 
        if (!newAdmin) {
            console.log("Error: Unable to create admin");
            res.status(500).json({ error: "Cannot register admin at the moment!" });
        }
        res.json({ message: "Thanks for registering" });
    } catch (error: any) {
    
        res.status(500).json({ message: error.message });
    }
};