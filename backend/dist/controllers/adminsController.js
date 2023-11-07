"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = exports.updateAdmin = exports.createAdmin = exports.getAdmin = exports.getAdmins = void 0;
const getAdmins = (req, res) => {
    res.json({
        msg: 'Hola'
    });
};
exports.getAdmins = getAdmins;
const getAdmin = (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
};
exports.getAdmin = getAdmin;
const createAdmin = (req, res) => {
    const { body } = req;
    res.json({
        body
    });
};
exports.createAdmin = createAdmin;
const updateAdmin = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        id,
        body
    });
};
exports.updateAdmin = updateAdmin;
const deleteAdmin = (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
};
exports.deleteAdmin = deleteAdmin;
//# sourceMappingURL=adminsController.js.map