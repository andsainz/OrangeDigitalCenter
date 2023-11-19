import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel, { UserModelAttributes } from "../models/usersModel";

export const postRegistration = async (req: Request, res: Response): Promise<void> => {
    try {
        const { fullName, email, user_password, isAdmin } = req.body;
        const alreadyExistsUser = await UserModel.findOne({ where: { email } });
        if (alreadyExistsUser) {
            res
                .status(409)
                .json({ message: "User with this email already exists." });
            return;
        }
        if (isAdmin) {
            res
                .status(400)
                .json({ message: "Cannot set isAdmin to true" });
            return;
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user_password, saltRounds);
        const newUser = await UserModel.create({
            fullName,
            email,
            user_password: hashedPassword,
            isAdmin: false
        } as UserModelAttributes); 
        if (!newUser) {
            console.log("Error: Unable to create user");
            res.status(500).json({ error: "Cannot register user at the moment!" });
        }
        res.json({ message: "Thanks for registering" });
    } catch (error: any) {
    
        res.status(500).json({ message: error.message });
    }
};