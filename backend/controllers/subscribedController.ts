import { Request, Response } from "express";
import SubscribedModel, {
    SubscribedModelAttributes,
} from "../models/subscribedModel";
import bcrypt from "bcrypt";

export const getSubscribed = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const subscribed = await SubscribedModel.findAll();
        const subscribedArray: SubscribedModelAttributes[] = subscribed.map(
            (subscribed) => {
                return {
                    id: subscribed.id,
                    email: subscribed.email,
                };
            }
        );
        res.json(subscribedArray);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubscribedById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const subscribed = await SubscribedModel.findByPk(id);
        if (!subscribed) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        res.json(subscribed);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createSubscribed = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const subscribedData: SubscribedModelAttributes = req.body;
        console.log('Received data:', subscribedData); 
        if (!subscribedData.email) {
            res.status(500).json({
                message: "Required data is missing to subscribe to the newsletter.",
            });
            return;
        }

        const existingSubscribed = await SubscribedModel.findOne({
            where: { email: subscribedData.email },
        });

        if (existingSubscribed) {
            res.status(409).json({
                message: "You are already subscribed to the newsletter.",
            });
            return;
        }

        const newSubscribed = await SubscribedModel.create(subscribedData);

        res.status(201).json(newSubscribed);
    } catch (error: any) {
        console.error('Error en el backend:', error);
        res.status(500).json({ message: error.message });
    }
};

export const updateSubscribed = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const { body } = req;
        const subscribed = await SubscribedModel.findByPk(id);
        if (!subscribed) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        await subscribed.update(body);
        res.json(subscribed);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSubscribed = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const subscribed = await SubscribedModel.findByPk(id);
        if (!subscribed) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        await subscribed.destroy();
        res.json({ message: "User deleted successfully." });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
