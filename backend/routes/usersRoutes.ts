import { Router } from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser, } from "../controllers/usersController";

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router