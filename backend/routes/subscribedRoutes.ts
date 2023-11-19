import { Router } from "express";
import { getSubscribed, getSubscribedById, createSubscribed, updateSubscribed, deleteSubscribed, } from "../controllers/subscribedController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', authenticateAdmin, getSubscribed)
router.get('/:id', authenticateAdmin, getSubscribedById)
router.post('/', authenticateAdmin, createSubscribed)
router.put('/:id', authenticateAdmin, updateSubscribed)
router.delete('/:id', authenticateAdmin, deleteSubscribed)

export default router