import express, { Application } from 'express'
import userRoutes from '../routes/usersRoutes'
import activityRoutes from '../routes/activitiesRoutes'
import categoryRoutes from '../routes/categoriesRoutes'
import adminRoutes from '../routes/adminsRoutes'
import registerRoutes from '../routes/registerRoutes'
import loginRoutes from '../routes/loginRoutes'
import cors from 'cors'

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        admins: '/api/admins',
        users: '/api/users',
        activities: '/api/activities',
        categories: '/api/categories',
        register: '/api/registration',
        login: '/api/login'
    }
    private userRoutes = userRoutes;
    private activityRoutes=activityRoutes;
    private categoryRoutes=categoryRoutes;
    private adminRoutes=adminRoutes;
    private registerRoutes=registerRoutes;
    private loginRoutes=loginRoutes;

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
        this.app.use(this.apiPaths.categories, this.categoryRoutes)
        this.app.use(this.apiPaths.admins, this.adminRoutes)
        this.app.use(this.apiPaths.register, this.registerRoutes)
        this.app.use(this.apiPaths.login, this.loginRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port)
        })
    }
}


export default Server