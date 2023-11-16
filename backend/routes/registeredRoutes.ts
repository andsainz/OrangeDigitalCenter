import { Router } from "express";
import { getRegistered, getregisteredById, createRegistered, updateRegistered, deleteRegistered, } from "../controllers/registeredController";
import { authenticateUser, authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', authenticateUser, authenticateAdmin, getRegistered)
router.get('/:id', authenticateUser, authenticateAdmin, getregisteredById)
router.post('/', authenticateUser, authenticateAdmin, createRegistered)
router.put('/:id', authenticateUser, authenticateAdmin, updateRegistered)
router.delete('/:id', authenticateUser, authenticateAdmin, deleteRegistered)

export default router