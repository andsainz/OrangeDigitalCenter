"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRoutes_1 = __importDefault(require("../routes/usersRoutes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.userRoutes = usersRoutes_1.default;
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.users, this.userRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map