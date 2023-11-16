import { Router } from "express";
import { getRegistered, getregisteredById, createRegistered, updateRegistered, deleteRegistered, } from "../controllers/registeredController";

const router = Router()

router.get('/', getRegistered)
router.get('/:id', getregisteredById)
router.post('/', createRegistered)
router.put('/:id', updateRegistered)
router.delete('/:id', deleteRegistered)

export default router