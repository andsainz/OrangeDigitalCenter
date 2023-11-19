import { Router } from "express";
import { getActivities, getActivityById, getActivitiesByCategory, createActivity, updateActivity, deleteActivity } from "../controllers/activitiesController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.get('/', getActivities);
router.get('/:id', getActivityById);
router.get('/categories/:category_id', getActivitiesByCategory);

router.post('/', createActivity);
router.put('/:id', authenticateUser, authenticateAdmin, updateActivity);
router.delete('/:id', authenticateUser, authenticateAdmin, deleteActivity);

export default router;
