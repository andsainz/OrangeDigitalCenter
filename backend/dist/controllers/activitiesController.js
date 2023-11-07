"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteActivity = exports.updateActivity = exports.createActivity = exports.getActivity = exports.getActivities = void 0;
const getActivities = (req, res) => {
    res.json({
        msg: 'Hola'
    });
};
exports.getActivities = getActivities;
const getActivity = (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
};
exports.getActivity = getActivity;
const createActivity = (req, res) => {
    const { body } = req;
    res.json({
        body
    });
};
exports.createActivity = createActivity;
const updateActivity = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        id,
        body
    });
};
exports.updateActivity = updateActivity;
const deleteActivity = (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
};
exports.deleteActivity = deleteActivity;
//# sourceMappingURL=activitiesController.js.map