import { Router } from "express";
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from "../controllers/adminsController"

const router = Router()

router.get('/', getAdmins)
router.get('/:id', getAdminById)
router.post('/', createAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)

export default router