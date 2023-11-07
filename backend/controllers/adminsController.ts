import { Request, Response } from 'express';

export const getAdmins = (req: Request, res: Response): void => {
    res.json({
        msg: 'Hola'
    });
}

export const getAdmin = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.json({
        id
    });
}

export const createAdmin = (req: Request, res: Response): void => {
    const { body } = req;
    res.json({
        body
    });
}

export const updateAdmin = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        id,
        body
    });
}

export const deleteAdmin = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.json({
        id
    });
}
