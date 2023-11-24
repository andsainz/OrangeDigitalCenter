import { Router } from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser, } from "../controllers/usersController";
import { authenticateAdmin } from "../middlewares/authenticateAdmin";

const router = Router()

router.get('/', authenticateAdmin, getUsers)
router.get('/:id', authenticateAdmin, getUserById)
router.post('/', authenticateAdmin, createUser)
router.put('/:id', authenticateAdmin, updateUser)
router.delete('/:id', authenticateAdmin, deleteUser)

export default router