import { Router } from "express";
import { postLogin } from "../controllers/loginController"

const router = Router()

router.post('/', postLogin)

export default router