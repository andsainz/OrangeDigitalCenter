import request from "supertest";
import express from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getRegistered, getRegisteredById, createRegistered, updateRegistered, deleteRegistered } from "../controllers/registerformController";
import RegisteredModel from "../models/registerformModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp = express();
testApp.use(express.json());
testApp.get("/registerform", getRegistered);
testApp.get("/registerform/:id", getRegisteredById);
testApp.post("/registerform", createRegistered);
testApp.put("/registerform/:id", updateRegistered);
testApp.delete("/registerform/:id", deleteRegistered);

describe("Registered Controller - Registered Routes", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should respond with a list of registered users", async () => {
        const registeredUsers = [
            {
                id: "mocked-uuid",
                email: "test@example.com",
                fullName: "John Doe",
                gender: "Male",
                age: "25",
                postalCode: "12345",
                interests: "Programming",
                hasDonePreviousActivity: "true",
                isSubscribed: "true",
                availableTime: "Evenings",
            },
        ];
        (RegisteredModel.findAll as jest.Mock).mockResolvedValue(
            registeredUsers
        );
        const response = await request(testApp).get("/registerform");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(registeredUsers);
    });

    it("should handle errors for getting registered users and respond with a 500 status code", async () => {
        (RegisteredModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
        const response = await request(testApp).get("/registerform");
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should respond with registered user details by ID", async () => {
        const registeredUserId = "mocked-uuid";
        const registeredUserDetails = {
            id: registeredUserId,
            email: "test@example.com",
            fullName: "John Doe",
            gender: "Male",
            age: "25",
            postalCode: "12345",
            interests: "Programming",
            hasDonePreviousActivity: "true",
            isSubscribed: "true",
            availableTime: "Evenings",
        };
        (RegisteredModel.findByPk as jest.Mock).mockResolvedValue(
            registeredUserDetails
        );
        const response = await request(testApp).get(
            `/registerform/${registeredUserId}`
        );
        expect(response.status).toBe(200);
        expect(response.body).toEqual(registeredUserDetails);
    });

    it("should handle errors for getting registered user by ID and respond with a 500 status code", async () => {
        const registeredUserId = "mocked-uuid";
        (RegisteredModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
        const response = await request(testApp).get(
            `/registerform/${registeredUserId}`
        );
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should create a new registered user and respond with a 201 status code", async () => {
        const newRegisteredUser = {
            email: "newuser@example.com",
            fullName: "New User",
            gender: "Female",
            age: "30",
            postalCode: "54321",
            interests: "Entrepreneurship",
            hasDonePreviousActivity: "false",
            isSubscribed: "true",
            availableTime: "Weekends",
        };
        (RegisteredModel.create as jest.Mock).mockResolvedValue(
            newRegisteredUser
        );
        const response = await request(testApp)
            .post("/registerform")
            .send(newRegisteredUser);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(newRegisteredUser);
    });

    it("should handle errors for creating registered user and respond with a 500 status code", async () => {
        const newRegisteredUser = {
            email: "newuser@example.com",
            fullName: "New User",
            gender: "Female",
            age: "30",
            postalCode: "54321",
            interests: "Entrepreneurship",
            hasDonePreviousActivity: "false",
            isSubscribed: "true",
            availableTime: "Weekends",
        };
        (RegisteredModel.create as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
        const response = await request(testApp)
            .post("/registerform")
            .send(newRegisteredUser);
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should update details of a registered user by ID", async () => {
        const updatedRegisteredUser = {
            email: "updateduser@example.com",
            fullName: "Updated User",
            gender: "Male",
            age: "28",
            postalCode: "98765",
            interests: "Digitization",
            hasDonePreviousActivity: "true",
            isSubscribed: "false",
            availableTime: "Evenings",
        };

        (RegisteredModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            ...updatedRegisteredUser,
            update: jest.fn(),
        });

        const response = await request(testApp)
            .put("/registerform/mocked-uuid")
            .send(updatedRegisteredUser);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: "mocked-uuid",
            ...updatedRegisteredUser,
        });
    });

    it("should handle errors in updateRegistered and respond with a 500 status code", async () => {
        (RegisteredModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).put("/registerform/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should delete a registered user by ID", async () => {
        (RegisteredModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            email: "test@example.com",
            fullName: "John Doe",
            gender: "Male",
            age: "25",
            postalCode: "12345",
            interests: "Programming",
            hasDonePreviousActivity: "true",
            isSubscribed: "true",
            availableTime: "Evenings",
            destroy: jest.fn(),
        });

        const response = await request(testApp).delete(
            "/registerform/mocked-uuid"
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Registered deleted successfully.",
        });
    });
});
