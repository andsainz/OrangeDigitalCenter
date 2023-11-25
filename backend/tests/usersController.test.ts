import request from "supertest";
import express from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/usersController";
import UserModel from "../models/usersModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp = express();
testApp.use(express.json());
testApp.get("/users", getUsers);
testApp.get("/users/:id", getUserById);
testApp.post("/users", createUser);
testApp.put("/users/:id", updateUser);
testApp.delete("/users/:id", deleteUser);

describe("User Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should respond with a list of users", async () => {
        const users = [
            {
                id: "mocked-uuid",
                fullName: "John Doe",
                email: "john@example.com",
                user_password: "hashed-password",
                isAdmin: false,
            },
        ];

        (UserModel.findAll as jest.Mock).mockResolvedValue(users);

        const response = await request(testApp).get("/users");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(users);
    });

    it("should handle errors in getUsers and respond with a 500 status code", async () => {
        (UserModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).get("/users");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should respond with details of a user by ID", async () => {
        const user = {
            id: "mocked-uuid",
            fullName: "John Doe",
            email: "john@example.com",
            user_password: "hashed-password",
            isAdmin: false,
        };

        (UserModel.findByPk as jest.Mock).mockResolvedValue(user);

        const response = await request(testApp).get("/users/mocked-uuid");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(user);
    });

    it("should handle errors in getUserById and respond with a 500 status code", async () => {
        (UserModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).get("/users/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should create a new user", async () => {
        const newUser = {
            fullName: "New User",
            email: "newuser@example.com",
            user_password: "password123",
            isAdmin: false,
        };

        (UserModel.findOne as jest.Mock).mockResolvedValue(null);
        (UserModel.create as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            ...newUser,
        });

        const response = await request(testApp)
            .post("/users")
            .send(newUser);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: "mocked-uuid",
            ...newUser,
        });
    });

    it("should handle errors in createUser and respond with a 500 status code", async () => {
        (UserModel.findOne as jest.Mock).mockRejectedValue(
            new Error("Required data is missing to create a user.")
        );

        const response = await request(testApp).post("/users");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            message: "Required data is missing to create a user.",
        });
    });

    it("should update details of a user by ID", async () => {
        const updatedUser = {
            fullName: "Updated User",
            email: "updateduser@example.com",
            user_password: "updated-password",
            isAdmin: true,
        };

        (UserModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            ...updatedUser,
            update: jest.fn(),
        });

        const response = await request(testApp)
            .put("/users/mocked-uuid")
            .send(updatedUser);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: "mocked-uuid",
            ...updatedUser,
        });
    });

    it("should handle errors in updateUser and respond with a 500 status code", async () => {
        (UserModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).put("/users/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should delete a user by ID", async () => {
        (UserModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            fullName: "John Doe",
            email: "john@example.com",
            user_password: "hashed-password",
            isAdmin: false,
            destroy: jest.fn(),
        });

        const response = await request(testApp).delete("/users/mocked-uuid");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "User deleted successfully." });
    });

    it("should handle errors in deleteUser and respond with a 500 status code", async () => {
        (UserModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).delete("/users/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
