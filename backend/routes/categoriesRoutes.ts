import { Router } from "express";
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesController";
import { authenticateAdmin } from "../middlewares/authenticateAdmin";

const router = Router()

router.get('/', authenticateAdmin, getCategories)
router.get('/:id', authenticateAdmin, getCategoryById)
router.post('/', authenticateAdmin, createCategory)
router.put('/:id', authenticateAdmin, updateCategory)
router.delete('/:id', authenticateAdmin, deleteCategory)

export default router