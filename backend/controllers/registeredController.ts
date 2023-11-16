import { Request, Response } from 'express';
import RegisteredModel, {RegisteredModelAttributes} from '../models/registeredModel';
import bcrypt from "bcrypt";

export const getRegistered = async (req: Request, res: Response): Promise<void> => {
    try {
        const registered = await RegisteredModel.findAll();
        const registeredArray: RegisteredModelAttributes[] = registered.map((registered) => {
            return {
                id: registered.id,
                email: registered.email,
                fullName: registered.fullName,
                gender: registered.gender,
                age: registered.age,
                residencePlace: registered.residencePlace,
                interests: registered.interests,
                hasDonePreviousActivity: registered.hasDonePreviousActivity,
                isSubscribed: registered.isSubscribed,
                subscriptionDesire: registered.subscriptionDesire,
            };
        });
        res.json(registeredArray);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export const getregisteredById = async (req: Request, res: Response): Promise<void>  => {
    try {
        const { id } = req.params;
        const registered = await RegisteredModel.findByPk(id);
        if (!registered) {
            res.status(404).json({ message: "Register not found." });
            return;
        }
        res.json(registered);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createRegistered = async (req: Request, res: Response): Promise<void> => {
    try {
        const registeredData: RegisteredModelAttributes = req.body;
        console.log('Received data:', registeredData);

        if (!registeredData) {
            console.log('Missing data to create a register.');
            res.status(400).json({
                message: 'Required data is missing to create a register.',
            });
            return;
        }

        const existingRegistered = await RegisteredModel.findOne({
            where: { email: registeredData.email },
        });

        if (existingRegistered) {
            console.log('Register already exists.');
            res.status(409).json({
                message: 'The register already exists.',
            });
            return;
        }

        const newRegistered = await RegisteredModel.create(registeredData);
        console.log('New register created:', newRegistered);

        res.status(201).json(newRegistered);
    } catch (error: any) {
        console.error('Error creating register:', error);
        res.status(500).json({ message: error.message });
    }
};


export const updateRegistered = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { body } = req;
        const registered = await RegisteredModel.findByPk(id);
        if (!registered) {
            res.status(404).json({ message: "Register not found." });
            return;
        }
        await registered.update(body);
        res.json(registered);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteRegistered = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const registered = await RegisteredModel.findByPk(id);
        if (!registered) {
            res.status(404).json({ message: "Registered not found." });
            return;
        }
        await registered.destroy();
        res.json({ message: "Registered deleted successfully." });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
