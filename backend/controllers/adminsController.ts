import { Request, Response } from 'express';
import AdminModel, {AdminModelAttributes} from '../models/adminsModel';
import bcrypt from "bcrypt";

export const getAdmins = async (req: Request, res: Response): Promise<void> => {
    try {
        const admins = await AdminModel.findAll();
        const adminsArray: AdminModelAttributes[] = admins.map((admin) => {
            return {
                id: admin.id,
                fullName: admin.fullName,
                email: admin.email,
                admin_password: admin.admin_password,
                role: "admin"
            };
        });
        res.json(adminsArray);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getAdminById = async (req: Request, res: Response): Promise<void>  => {
    try {
        const { id } = req.params;
        const admin = await AdminModel.findByPk(id);
        if (!admin) {
            res.status(404).json({ message: "Admin not found." });
            return;
        }
        res.json(admin);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createAdmin = async(req: Request, res: Response): Promise<void> => {
    try {
        const adminData: AdminModelAttributes = req.body;
        if (!adminData.fullName || !adminData.email || !adminData.admin_password) {
            res.status(400).json({
                message: "Required data is missing to create an admin.",
            });
            return;
        }

        const existingAdmin = await AdminModel.findOne({
            where: { email: adminData.email },
        });

        if (existingAdmin) {
            res.status(409).json({
                message: "Password or email does not match.",
            });
            return;
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(adminData.admin_password, saltRounds);

        adminData.admin_password = hashedPassword;

        const newAdmin = await AdminModel.create(adminData);

        res.status(201).json(newAdmin);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updateAdmin = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { body } = req;
        const admin = await AdminModel.findByPk(id);
        if (!admin) {
            res.status(404).json({ message: "Admin not found." });
            return;
        }
        await admin.update(body);
        res.json(admin);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAdmin = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const admin = await AdminModel.findByPk(id);
        if (!admin) {
            res.status(404).json({ message: "Admin not found." });
            return;
        }
        await admin.destroy();
        res.json({ message: "Admin deleted successfully." });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
