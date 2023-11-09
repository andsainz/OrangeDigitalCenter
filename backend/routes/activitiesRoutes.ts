import { Router } from "express";
import { getActivities, getActivityById, getActivitiesByCategory, createActivity, updateActivity, deleteActivity } from "../controllers/activitiesController";
import { authenticateUser, authenticateAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.get('/', getActivities);
router.get('/:id', getActivityById);
router.get('/categories/:category_id', getActivitiesByCategory);

router.use(authenticateUser, authenticateAdmin);
router.post('/', createActivity);
router.put('/:id', updateActivity);
router.delete('/:id', deleteActivity);

export default router;
