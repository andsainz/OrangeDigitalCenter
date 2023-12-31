import request from "supertest";
import express, { Application } from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin } from "../controllers/adminsController";
import AdminModel from "../models/adminsModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp: Application = express();
testApp.use(express.json());
testApp.get("/admins", getAdmins);
testApp.get("/admins/:id", getAdminById);
testApp.post("/admins", createAdmin);
testApp.put("/admins/:id", updateAdmin);
testApp.delete("/admins/:id", deleteAdmin);

describe("Admin Controller - Admin Routes", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterAll(async () => {
        await mockedSequelize.close();
    });

    it("should respond with a list of admins", async () => {
        const admins = [
            {
                id: "mocked-uuid",
                fullName: "Admin 1",
                email: "admin1@example.com",
                admin_password: "hashed-password",
                isAdmin: true
            },
        ];
        (AdminModel.findAll as jest.Mock).mockResolvedValue(admins);
        const response = await request(testApp).get("/admins");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(admins);
    });

    it("should handle errors for getting admins and respond with a 500 status code", async () => {
        (AdminModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
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
            admin_password: "hashed-password",
            isAdmin: true
        };
        (AdminModel.findByPk as jest.Mock).mockResolvedValue(adminDetails);
        const response = await request(testApp).get(`/admins/${adminId}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(adminDetails);
    });

    it("should handle errors for getting admin by ID and respond with a 500 status code", async () => {
        const adminId = "mocked-uuid";
        (AdminModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
        const response = await request(testApp).get(`/admins/${adminId}`);
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should create a new admin and respond with a 201 status code", async () => {
        const newAdmin = {
            fullName: "New Admin",
            email: "newadmin@example.com",
            admin_password: "new-hashed-password",
            isAdmin: true
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
            admin_password: "new-hashed-password",
            isAdmin: true
        };
        (AdminModel.create as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
        const response = await request(testApp).post("/admins").send(newAdmin);
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should update details of an admin by ID", async () => {
        const updatedAdmin = {
            fullName: "Updated Admin",
            email: "updatedadmin@example.com",
            admin_password: "updated-hashed-password",
            isAdmin: true
        };

        (AdminModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            ...updatedAdmin,
            update: jest.fn(),
        });

        const response = await request(testApp)
            .put("/admins/mocked-uuid")
            .send(updatedAdmin);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: "mocked-uuid",
            ...updatedAdmin,
        });
    });

    it("should handle errors in updateAdmin and respond with a 500 status code", async () => {
        (AdminModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).put("/admins/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should delete an admin by ID", async () => {
        (AdminModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            fullName: "Admin 1",
            email: "admin1@example.com",
            admin_password: "hashed-password",
            isAdmin: true,
            destroy: jest.fn(),
        });

        const response = await request(testApp).delete("/admins/mocked-uuid");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Admin deleted successfully." });
    });

    it("should handle errors in deleteAdmin and respond with a 500 status code", async () => {
        (AdminModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).delete("/admins/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
