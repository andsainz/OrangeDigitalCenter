import { Request, Response } from 'express';
import ActivityModel, { ActivityModelAttributes } from '../models/activitiesModel';

export const getActivities = async (req: Request, res: Response): Promise<void> => {
    try {
        const activities = await ActivityModel.findAll();
        const activitiesArray: ActivityModelAttributes[] = activities.map((activity) => {
            return {
                activity_id: activity.activity_id,
                category_id: activity.category_id,
                activity_image: activity.activity_image,
                activity_title: activity.activity_title,
                activity_description: activity.activity_description,
                activity_date: activity.activity_date,
                start_time: activity.start_time,
                end_time: activity.end_time,
                activity_link: activity.activity_link,
                activity_content: activity.activity_content,
                activity_logos: activity.activity_logos,
                available_places: activity.available_places
            };
        });
        res.json(activitiesArray);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getActivityById = async(req: Request, res: Response): Promise<void> => {
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

export const getActivitiesByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { category_id } = req.params;

        const activities = await ActivityModel.findAll({
            where: { category_id },
            attributes: { exclude: ['id'] },
        });

        if (!activities) {
            res.status(404).json({ message: "Category not found." });
        } else {
            res.json(activities);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createActivity = async (req: Request, res: Response): Promise<void> => {
    try {
        const { activity_id, ...activityData } = req.body;

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
