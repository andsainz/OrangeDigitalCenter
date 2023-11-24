import { Router } from "express";
import { getSubscribed, getSubscribedById, createSubscribed, updateSubscribed, deleteSubscribed, } from "../controllers/subscribedController";
import { authenticateAdmin } from "../middlewares/authenticateAdmin";

const router = Router()

router.get('/', authenticateAdmin, getSubscribed)
router.get('/:id', authenticateAdmin, getSubscribedById)
router.post('/', createSubscribed)
router.put('/:id', authenticateAdmin, updateSubscribed)
router.delete('/:id', authenticateAdmin, deleteSubscribed)

export default router