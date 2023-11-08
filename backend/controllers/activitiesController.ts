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

export const createActivity = async(req: Request, res: Response): Promise<void> => {
    try {
        const activityData: ActivityModelAttributes = req.body;
        if (!activityData.activity_image || !activityData.title || !activityData.subtitle || !activityData.activity_date  || !activityData.available_places) {
            res.status(400).json({
                message: "Required data is missing to create an activity.",
            });
            return;
        }

        const existingActivity = await ActivityModel.findOne({
            where: { activity_id: activityData.activity_id },
        });

        if (existingActivity) {
            res.status(409).json({
                message: "This activity already exists",
            });
            return;
        }

        const newActivity = await ActivityModel.create(activityData);

        res.status(201).json(newActivity);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updateActivity = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        id,
        body
    });
}

export const deleteActivity = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.json({
        id
    });
}
