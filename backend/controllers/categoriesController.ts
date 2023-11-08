import { Request, Response } from 'express';
import CategoryModel, { CategoryModelAttributes } from '../models/categoriesModel';

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryModel.findAll();
        const categoriesArray: CategoryModelAttributes[] = categories.map((category) => {
            return {
                category_id: category.category_id,
                category_name: category.category_name,
            };
        });
        res.json(categoriesArray);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getCategoryById = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findByPk(id);
        if (!category) {
            res.status(404).json({ message: "Category not found." });
            return;
        }
        res.json(category);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryData: CategoryModelAttributes = {
            category_id: 0,
            category_name: req.body.category_name
        };

        const newCategory = await CategoryModel.create(categoryData);

        res.status(201).json(newCategory);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCategory = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { body } = req;
        const category = await CategoryModel.findByPk(id);
        if (!category) {
            res.status(404).json({ message: "Category not found." });
            return;
        }
        await category.update(body);
        res.json(category);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteCategory = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findByPk(id);
        if (!category) {
            res.status(404).json({ message: "Category not found." });
            return;
        }
        await category.destroy();
        res.json({ message: "Category deleted successfully." });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
