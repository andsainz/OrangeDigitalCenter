import { Request, Response } from 'express';

export const getActivities = (req: Request, res: Response): void => {
    res.json({
        msg: 'Hola'
    });
}

export const getActivity = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.json({
        id
    });
}

export const createActivity = (req: Request, res: Response): void => {
    const { body } = req;
    res.json({
        body
    });
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
