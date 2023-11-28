import { Request, Response } from "express";
import AdminModel from "../models/adminsModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, admin_password } = req.body;
        const admin = await AdminModel.findOne({ where: { email } }).catch(
            (err: Error) => {
                console.log("Error: ", err);
            }
        );

        if (!admin) {
            res.status(401).json({ message: "Email or password does not match!" });
            return;
        }

        const match = await bcrypt.compare(admin_password, admin.admin_password);

        if (!match) {
            res.status(401).json({ message: "Email or password does not match!" });
            return;
        }

        const role = admin.isAdmin ? "admin" : "user";

        const jwtToken = jwt.sign(
            { id: admin.id, email: admin.email, role },
            process.env.JWT_SECRET as string
        );

        res.cookie('token', jwtToken, { httpOnly: false, expires: new Date(Date.now() + 3600000) });

        res.status(200).json({ message: 'Login successful', token: jwtToken });
    } catch (error: any) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
