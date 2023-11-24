import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import UserModel from "../models/usersModel";
import dotenv from 'dotenv'
dotenv.config()

interface AuthenticatedRequest extends Request {
    institutionalVisitor?: UserModel;
}

export const authenticateInstitutionalVisitor = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
        if (!token) {
            res.status(403).json({ message: "Permission denied. Missing or invalid token" });
            return;
        }

        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            res.status(500).json({ message: "JWT_SECRET is not defined in environment variables" });
            return;
        }

        const decodedToken: any = jwt.verify(token, jwtSecret);

        if (decodedToken) {
            const user = await UserModel.findByPk(decodedToken.userId);

            if (user) {
                req.institutionalVisitor = user;
            }

            next();
        } else {
            res.status(403).json({ message: "Permission denied. Invalid token" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};