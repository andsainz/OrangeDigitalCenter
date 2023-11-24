import { Router } from "express";
import { getActivities, getActivityById, getActivitiesByCategory, createActivity, updateActivity, deleteActivity } from "../controllers/activitiesController";
import { authenticateAdmin } from "../middlewares/authenticateAdmin";
import { authenticateInstitutionalVisitor } from "../middlewares/authenticateInstitutionalVisitor";
const router = Router();

router.get('/', getActivities);
router.get('/:id', getActivityById);
router.get('/categories/:category_name', getActivitiesByCategory);

router.post('/', createActivity);
router.put('/:id', updateActivity);
router.delete('/:id', deleteActivity);

export default router;
