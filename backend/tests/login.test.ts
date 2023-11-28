import request from 'supertest';
import Server from '../models/server';
import AdminModel from '../models/adminsModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

let server: Server;

beforeEach(() => {
    server = new Server();
});

describe('POST /login', () => {
    it('should respond with a 200 status code and a valid token for valid credentials', async () => {
        try {
            const hashedPassword = await bcrypt.hash('1234', 10);

            const admin = await AdminModel.create({
                id: "mocked-uuid",
                fullName: 'Admin Name',
                email: 'admin@gmail.com',
                admin_password: 'hashedPassword',
                isAdmin: true
            });

            const res = await request(server.app)
                .post('/login')
                .send({
                    email: 'admin@gmail.com',
                    admin_password: '1234',
                });

            expect(res.status).toBe(200);

            expect(res.body).toHaveProperty('message', 'Login successful');
            expect(res.body).toHaveProperty('token');

            const decodedToken = jwt.verify(res.body.token, process.env.JWT_SECRET as string);
            expect(decodedToken).toHaveProperty('id', admin.id);
            expect(decodedToken).toHaveProperty('email', admin.email);
            expect(decodedToken).toHaveProperty('role', 'admin');
        } catch (error) {
            console.error('Test error:', error);
        }
    });

    it('should respond with a 401 status code for invalid credentials', async () => {
        const res = await request(server.app)
            .post('/login')
            .send({
                email: 'admin@gmail.com',
                admin_password: 'incorrectPassword',
            });

        expect(res.status).toBe(401);

        expect(res.body).toHaveProperty('message', 'Email or password does not match!');
    });
});
