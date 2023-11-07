import { Router } from "express";
import { getAdmins, getAdmin,createAdmin, updateAdmin, deleteAdmin} from "../controllers/adminsController"

const router = Router()

router.get('/', getAdmins)
router.get('/:id', getAdmin)
router.post('/', createAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)

export default router