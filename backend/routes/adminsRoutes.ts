import { Router } from "express";
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from "../controllers/adminsController"
import { authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', authenticateAdmin, getAdmins)
router.get('/:id', authenticateAdmin, getAdminById)
router.post('/', authenticateAdmin, createAdmin)
router.put('/:id', authenticateAdmin, updateAdmin)
router.delete('/:id', authenticateAdmin, deleteAdmin)

export default router