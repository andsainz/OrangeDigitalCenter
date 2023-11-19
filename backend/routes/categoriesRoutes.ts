import { Router } from "express";
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', getCategories)
router.get('/:id', getCategoryById)

router.post('/', authenticateAdmin, createCategory)
router.put('/:id', authenticateAdmin, updateCategory)
router.delete('/:id', authenticateAdmin, deleteCategory)

export default router