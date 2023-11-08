import { Router } from "express";
import { postRegistration } from "../controllers/registerController"

const router = Router()

router.post('/', postRegistration)

export default router