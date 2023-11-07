"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminsController_1 = require("../controllers/adminsController");
const router = (0, express_1.Router)();
router.get('/', adminsController_1.getAdmins);
router.get('/:id', adminsController_1.getAdmin);
router.post('/', adminsController_1.createAdmin);
router.put('/:id', adminsController_1.updateAdmin);
router.delete('/:id', adminsController_1.deleteAdmin);
exports.default = router;
//# sourceMappingURL=adminsRoutes.js.map