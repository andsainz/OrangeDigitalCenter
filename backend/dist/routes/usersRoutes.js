"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.get('/', usersController_1.getUsers);
router.get('/:id', usersController_1.getUser);
router.post('/', usersController_1.createUser);
router.put('/:id', usersController_1.updateUser);
router.delete('/:id', usersController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=usersRoutes.js.map