import express, { Application } from 'express'
import cors from 'cors'
import adminRoutes from '../routes/adminsRoutes'
import subscribedRoutes from '../routes/subscribedRoutes'
import registeredRoutes from '../routes/registerformRoutes'
import activityRoutes from '../routes/activitiesRoutes'
import categoryRoutes from '../routes/categoriesRoutes'
import loginRoutes from '../routes/loginRoutes'
import cookieParser from 'cookie-parser'

class Server {
    public app: Application;
    private port: string | number;
    private apiPaths = {
        admins: '/admins',
        subscribed: '/newsletter',
        registered: '/registerform',
        activities: '/activities',
        categories: '/categories',
        login: '/login'
    }
    private adminRoutes=adminRoutes;
    private subscribedRoutes=subscribedRoutes;
    private registeredRoutes=registeredRoutes;
    private activityRoutes=activityRoutes;
    private categoryRoutes=categoryRoutes;
    private loginRoutes=loginRoutes;

    constructor () {
        this.app = express()
        this.port = process.env.PORT || '8000'
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(cookieParser())
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.apiPaths.admins, this.adminRoutes)
        this.app.use(this.apiPaths.subscribed, this.subscribedRoutes)
        this.app.use(this.apiPaths.registered, this.registeredRoutes)
        this.app.use(this.apiPaths.activities, this.activityRoutes)
        this.app.use(this.apiPaths.categories, this.categoryRoutes)
        this.app.use(this.apiPaths.login, this.loginRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port)
        })
    }
}

export default Server