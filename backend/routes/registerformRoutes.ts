import { Router } from "express";
import { getRegistered, getregisteredById, createRegistered, updateRegistered, deleteRegistered, } from "../controllers/registerformController";
import {authenticateAdmin} from "../middlewares/authenticateAdmin"

const router = Router()

router.get('/', authenticateAdmin, getRegistered)
router.get('/:id', authenticateAdmin, getregisteredById)
router.post('/', createRegistered)
router.put('/:id', authenticateAdmin, updateRegistered)
router.delete('/:id', authenticateAdmin, deleteRegistered)

export default router