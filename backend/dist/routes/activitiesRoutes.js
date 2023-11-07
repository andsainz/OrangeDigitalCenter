"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activitiesController_1 = require("../controllers/activitiesController");
const router = (0, express_1.Router)();
router.get('/', activitiesController_1.getActivities);
router.get('/:id', activitiesController_1.getActivity);
router.post('/', activitiesController_1.createActivity);
router.put('/:id', activitiesController_1.updateActivity);
router.delete('/:id', activitiesController_1.deleteActivity);
exports.default = router;
//# sourceMappingURL=activitiesRoutes.js.map