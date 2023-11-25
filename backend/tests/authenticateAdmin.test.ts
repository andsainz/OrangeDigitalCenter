import request from 'supertest';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { authenticateAdmin } from '../middlewares/authenticateAdmin';

const testApp: Application = express();
testApp.use(cookieParser());
testApp.use((req, res, next) => {
    authenticateAdmin(req, res, next);
});

testApp.get('/admins', (req, res) => {
    res.status(200).json({ message: 'Admin route accessed successfully' });
});

describe('authenticateAdmin middleware', () => {

    it('should handle missing authorization token', async () => {
        const res = await request(testApp).get('/admin-route');

        expect(res.status).toBe(401);
        expect(res.body.message).toBe('Missing authorization token');
    });
});

