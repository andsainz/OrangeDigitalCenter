import request from "supertest";
import express, { Application } from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import {
    getAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin
} from "../controllers/adminsController";
import AdminModel from "../models/adminsModel";
import adminRoutes from '../routes/adminsRoutes'

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp: Application = express();
testApp.use(express.json()); // Middleware necesario para parsear el cuerpo de la solicitud

// Configurar rutas con middleware de autenticación falso para las pruebas
testApp.get("/admins", getAdmins);
testApp.get("/admins/:id", getAdminById);
testApp.post("/admins", createAdmin);
testApp.put("/admins/:id", updateAdmin);
testApp.delete("/admins/:id", deleteAdmin);

describe("Admin Controller - Admin Routes", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should respond with a list of admins", async () => {
        const admins = [
            {
                id: "mocked-uuid",
                fullName: "Admin 1",
                email: "admin1@example.com",
                user_password: "hashed-password",
                isAdmin: true,
            },
        ];

        (AdminModel.findAll as jest.Mock).mockResolvedValue(admins);

        const response = await request(testApp).get("/admins");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(admins);
    });

    it("should handle errors for getting admins and respond with a 500 status code", async () => {
        (AdminModel.findAll as jest.Mock).mockRejectedValue(new Error("Database error"));

        const response = await request(testApp).get("/admins");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should respond with admin details by ID", async () => {
        const adminId = "mocked-uuid";
        const adminDetails = {
            id: adminId,
            fullName: "Admin 1",
            email: "admin1@example.com",
            user_password: "hashed-password",
            isAdmin: true,
        };

        (AdminModel.findByPk as jest.Mock).mockResolvedValue(adminDetails);

        const response = await request(testApp).get(`/admins/${adminId}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(adminDetails);
    });

    it("should handle errors for getting admin by ID and respond with a 500 status code", async () => {
        const adminId = "mocked-uuid";
        (AdminModel.findByPk as jest.Mock).mockRejectedValue(new Error("Database error"));

        const response = await request(testApp).get(`/admins/${adminId}`);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should create a new admin and respond with a 201 status code", async () => {
        const newAdmin = {
            fullName: "New Admin",
            email: "newadmin@example.com",
            user_password: "new-hashed-password",
            isAdmin: true,
        };

        (AdminModel.create as jest.Mock).mockResolvedValue(newAdmin);

        const response = await request(testApp).post("/admins").send(newAdmin);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(newAdmin);
    });

    it("should handle errors for creating admin and respond with a 500 status code", async () => {
        const newAdmin = {
            fullName: "New Admin",
            email: "newadmin@example.com",
            user_password: "new-hashed-password",
            isAdmin: true,
        };

        (AdminModel.create as jest.Mock).mockRejectedValue(new Error("Database error"));

        const response = await request(testApp).post("/admins").send(newAdmin);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
})