import request from 'supertest';
import Server from '../models/server';

let server: Server;

beforeEach(() => {
    server = new Server();
});

describe('POST /login', () => {
    it('should respond with a 200 status code for valid credentials', async () => {
        const res = await request(server.app)
            .post('/login')
            .send({
                email: 'admin@gmail.com',
                user_password: 'admin',
            });

        expect(res.status).toBe(200);
    });
});
