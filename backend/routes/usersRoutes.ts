import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser, } from "../controllers/usersController";

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router