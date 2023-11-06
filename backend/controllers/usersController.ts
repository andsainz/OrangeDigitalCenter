import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response): void => {
    res.json({
        msg: 'Hola'
    });
}

export const getUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.json({
        id
    });
}

export const createUser = (req: Request, res: Response): void => {
    const { body } = req;
    res.json({
        body
    });
}

export const updateUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        id,
        body
    });
}

export const deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.json({
        id
    });
}
