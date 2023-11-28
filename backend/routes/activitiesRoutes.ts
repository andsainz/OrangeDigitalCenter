import { Router } from "express";
import { getActivities, getActivityById, getActivitiesByCategory, createActivity, updateActivity, deleteActivity } from "../controllers/activitiesController";
import { authenticateAdmin } from "../middlewares/authenticateAdmin";
const router = Router();

router.get('/', getActivities);
router.get('/:id', getActivityById);
router.get('/categories/:category_name', getActivitiesByCategory);
router.post('/', authenticateAdmin, createActivity);
router.put('/:id', authenticateAdmin, updateActivity);
router.delete('/:id', authenticateAdmin, deleteActivity);

export default router;
