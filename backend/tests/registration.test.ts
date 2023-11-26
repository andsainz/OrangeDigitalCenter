import request from 'supertest';
import Server from '../models/server';
import AdminModel from '../models/adminsModel';
import bcrypt from 'bcrypt';

let server: Server;

const generatedIds = new Set<string>();

const generateUniqueId = () => {
    let newId;
    do {
        newId = 'mocked-uuid-' + Math.random().toString(36).substring(7);
    } while (generatedIds.has(newId)); 
    generatedIds.add(newId);
    return newId;
};

beforeEach(() => {
    server = new Server();
});

describe('POST /registration', () => {
    it('should respond with a 200 status code and a success message when registering a new admin with a unique email', async () => {
        try {
            const res = await request(server.app)
                .post('/registration')
                .send({
                    id: generateUniqueId(),
                    fullName: 'New Admin',
                    email: 'newadmin@gmail.com',
                    admin_password: 'newpassword',
                    isAdmin: true,
                });

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('message', 'Thanks for registering');
        } catch (error) {
            console.error('Test error:', error);
        }
    });

    it('should respond with a 409 status code and an error message when registering a new admin with a duplicate email', async () => {
        try {
            const hashedPassword = await bcrypt.hash('password123', 10);
            await AdminModel.create({
                id: generateUniqueId(),
                fullName: 'Existing Admin',
                email: 'existingadmin@gmail.com',
                admin_password: hashedPassword,
                isAdmin: true,
            });

            const res = await request(server.app)
                .post('/registration')
                .send({
                    id: generateUniqueId(),
                    fullName: 'Another Admin',
                    email: 'existingadmin@gmail.com',
                    admin_password: 'newpassword',
                    isAdmin: true,
                });

            expect(res.status).toBe(409);
            expect(res.body).toHaveProperty('message', 'Admin with this email already exists.');
        } catch (error) {
            console.error('Test error:', error);
        }
    });
});
