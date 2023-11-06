import { Router } from "express";
import { deleteUser, getUser, getUsers, createUser, updateUser } from "../controllers/usersController";

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router