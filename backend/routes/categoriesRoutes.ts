import { Router } from "express";
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesController";
import { authenticateUser, authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', getCategories)
router.get('/:id', getCategoryById)

router.post('/', authenticateUser, authenticateAdmin, createCategory)
router.put('/:id', authenticateUser, authenticateAdmin, updateCategory)
router.delete('/:id', authenticateUser, authenticateAdmin, deleteCategory)

export default router