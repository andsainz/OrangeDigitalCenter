import express, { Application } from 'express'
import userRoutes from '../routes/usersRoutes'
import cors from 'cors'

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        users: '/api/users'
    }
    private userRoutes = userRoutes; 

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
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port)
        })
    }
}

export default Server