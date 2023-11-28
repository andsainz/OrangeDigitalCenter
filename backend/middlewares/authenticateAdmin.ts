import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import AdminModel from "../models/adminsModel";
import dotenv from 'dotenv'
dotenv.config()

interface AuthenticatedRequest extends Request {
    admin?: AdminModel;
}

export const authenticateAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
        if (!token) {
            res.status(401).json({ message: "Missing authorization token" });
            return;
        }

        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            res.status(500).json({ message: "JWT_SECRET is not defined in environment variables" });
            return;
        }

        const decodedToken: any = jwt.verify(token, jwtSecret);

        if (decodedToken && decodedToken.role === "admin") {
            next();
        } else {
            res.status(403).json({ message: "Permission denied. User is not an admin" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
