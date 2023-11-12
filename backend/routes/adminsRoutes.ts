import { Router } from "express";
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from "../controllers/adminsController"
import { authenticateUser, authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', authenticateUser, authenticateAdmin, getAdmins)
router.get('/:id', authenticateUser, authenticateAdmin, getAdminById)
router.post('/', authenticateUser, authenticateAdmin, createAdmin)
router.put('/:id', authenticateUser, authenticateAdmin, updateAdmin)
router.delete('/:id', authenticateUser, authenticateAdmin, deleteAdmin)

export default router