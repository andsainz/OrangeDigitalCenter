import { Request, Response } from "express";
import UserModel, { UserModelAttributes } from "../models/usersModel";
import bcrypt from "bcrypt";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserModel.findAll();
        const usersArray: UserModelAttributes[] = users.map((user) => {
            return {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                user_password: user.user_password,
                isAdmin: user.isAdmin,
            };
        });
        res.json(usersArray);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByPk(id);
        if (!user) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const userData: UserModelAttributes = req.body;
        if (!userData.fullName || !userData.email || !userData.user_password) {
            res.status(400).json({
                message: "Required data is missing to create a user.",
            });
            return;
        }

        const existingUser = await UserModel.findOne({
            where: { email: userData.email },
        });

        if (existingUser) {
            res.status(409).json({
                message: "Password or email does not match.",
            });
            return;
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.user_password, saltRounds);

        userData.user_password = hashedPassword;

        const newUser = await UserModel.create(userData);

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = await UserModel.findByPk(id);
        if (!user) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        await user.update(body);
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByPk(id);
        if (!user) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        await user.destroy();
        res.json({ message: "User deleted successfully." });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
