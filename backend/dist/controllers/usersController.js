"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'Hola'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { body } = req;
    res.json({
        body
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        id,
        body
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=usersController.js.map