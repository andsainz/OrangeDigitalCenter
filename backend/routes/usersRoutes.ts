import { Router } from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser, } from "../controllers/usersController";
import { authenticateUser, authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', authenticateUser, authenticateAdmin, getUsers)
router.get('/:id', authenticateUser, authenticateAdmin, getUserById)
router.post('/', authenticateUser, authenticateAdmin, createUser)
router.put('/:id', authenticateUser, authenticateAdmin, updateUser)
router.delete('/:id', authenticateUser, authenticateAdmin, deleteUser)

export default router