import express, { Application } from 'express'
import userRoutes from '../routes/usersRoutes'
import activityRoutes from '../routes/activitiesRoutes'
import adminRoutes from '../routes/adminsRoutes'
import cors from 'cors'

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        users: '/api/users',
        activities: '/api/activities',
        admins: '/api/admins'
    }
    private userRoutes = userRoutes;
    private activityRoutes=activityRoutes;
    private adminRoutes=adminRoutes;

    constructor () {
        this.app = express()
        this.port = process.env.PORT || '8000'
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.apiPaths.users, this.userRoutes)
        this.app.use(this.apiPaths.activities, this.activityRoutes)
        this.app.use(this.apiPaths.admins, this.adminRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port)
        })
    }
}

export default Server