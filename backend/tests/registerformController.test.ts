import request from "supertest";
import express from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getRegistered, getregisteredById, createRegistered, updateRegistered, deleteRegistered } from "../controllers/registerformController";
import RegisteredModel from "../models/registerformModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp = express();

testApp.get("/registered", getRegistered);
testApp.get("/registered/:id", getregisteredById);
testApp.post("/registered", createRegistered);
testApp.put("/registered/:id", updateRegistered);
testApp.delete("/registered/:id", deleteRegistered);

describe("Registerform Controller - getRegistered", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should respond with a list of registered users", async () => {
        const registeredUsers = [
            {
                id: "mocked-uuid",
                email: "user1@example.com"
            },
        ];

        (RegisteredModel.findAll as jest.Mock).mockResolvedValue(registeredUsers);

        const response = await request(testApp).get("/registered");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(registeredUsers);
    });

    it("should handle errors and respond with a 500 status code", async () => {
        (RegisteredModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).get("/registered");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
