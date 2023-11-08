import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel, { UserModelAttributes } from "../models/usersModel";

export const postRegistration = async (req: Request, res: Response): Promise<void> => {
    try {
        const { fullName, email, user_password } = req.body;
        const alreadyExistsUser = await UserModel.findOne({ where: { email } });
        if (alreadyExistsUser) {
            res
                .status(409)
                .json({ message: "User with this email already exists." });
            return;
        }
        const hashedPassword = await bcrypt.hash(user_password, 10);
        const newUser = await UserModel.create({
            fullName,
            email,
            user_password: hashedPassword,
        } as UserModelAttributes); // Añadí la conversión de tipo aquí
        if (!newUser) {
            console.log("Error: Unable to create user");
            res.status(500).json({ error: "Cannot register user at the moment!" });
        }
        res.json({ message: "Thanks for registering" });
    } catch (error: any) {
        // Maneja errores de manera adecuada
        res.status(500).json({ message: error.message });
    }
};
