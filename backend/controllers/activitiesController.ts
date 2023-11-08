import { Request, Response } from 'express';
import ActivityModel, { ActivityModelAttributes } from '../models/activitiesModel';

export const getActivities = async (req: Request, res: Response): Promise<void> => {
    try {
        const activities = await ActivityModel.findAll();
        const activitiesArray: ActivityModelAttributes[] = activities.map((activity) => {
            return {
                activity_id: activity.activity_id,
                activity_image: activity.activity_image,
                title: activity.title,
                subtitle: activity.subtitle,
                activity_date: activity.activity_date,
                available_places: activity.available_places
            };
        });
        res.json(activitiesArray);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getActivity = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const activity = await ActivityModel.findByPk(id);
        if (!activity) {
            res.status(404).json({ message: "Activity not found." });
            return;
        }
        res.json(activity);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createActivity = async (req: Request, res: Response): Promise<void> => {
    try {
        const activityData: ActivityModelAttributes = {
            activity_image: req.body.activity_image,
            title: req.body.title,
            subtitle: req.body.subtitle,
            activity_date: req.body.activity_date,
            available_places: req.body.available_places,
            activity_id: 0
        };

        const newActivity = await ActivityModel.create(activityData);

        res.status(201).json(newActivity);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateActivity = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { body } = req;
        const activity = await ActivityModel.findByPk(id);
        if (!activity) {
            res.status(404).json({ message: "Activity not found." });
            return;
        }
        await activity.update(body);
        res.json(activity);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteActivity = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const activity = await ActivityModel.findByPk(id);
        if (!activity) {
            res.status(404).json({ message: "Activity not found." });
            return;
        }
        await activity.destroy();
        res.json({ message: "Activity deleted successfully." });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
