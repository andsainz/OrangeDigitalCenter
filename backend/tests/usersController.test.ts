import request from "supertest";
import express from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getUsers } from "../controllers/usersController";
import UserModel from "../models/usersModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp = express();
testApp.get("/users", getUsers);

describe("User Controller - getUsers", () => {
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
                isAdmin: false
            },
        ];

        (UserModel.findAll as jest.Mock).mockResolvedValue(users);

        const response = await request(testApp).get("/users");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(users);
    });

    it("should handle errors and respond with a 500 status code", async () => {
        
        (UserModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).get("/users");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
