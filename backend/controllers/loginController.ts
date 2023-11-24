import { Request, Response } from "express";
import UserModel from "../models/usersModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, user_password } = req.body;
        const user = await UserModel.findOne({ where: { email } }).catch(
            (err: Error) => {
                console.log("Error: ", err);
            }
        );

        if (!user) {
            res.json({ message: "Email or password does not match!" });
            return;
        }

        const match = await bcrypt.compare(user_password, user.user_password);

        if (!match) {
            res.status(401).json({ message: "Email or password does not match!" });
            return;
        }

        const role = user.isAdmin ? "admin" : "user";

        const jwtToken = jwt.sign(
            { id: user.id, email: user.email, role },
            process.env.JWT_SECRET as string
        );

        res.cookie('token', jwtToken, { httpOnly: false, expires: new Date(Date.now() + 3600000) });
        console.log("Cookies enviadas:", res.getHeader("Set-Cookie"));

        res.json({ message: "Welcome back!", token: jwtToken });

    } catch (error: any) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};