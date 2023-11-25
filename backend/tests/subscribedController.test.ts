import request from "supertest";
import express from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getSubscribed, getSubscribedById, createSubscribed, updateSubscribed, deleteSubscribed } from "../controllers/subscribedController";
import SubscribedModel from "../models/subscribedModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp = express();
testApp.use(express.json());  
testApp.get("/newsletter", getSubscribed);
testApp.get("/newsletter/:id", getSubscribedById);
testApp.post("/newsletter", createSubscribed);
testApp.put("/newsletter/:id", updateSubscribed);
testApp.delete("/newsletter/:id", deleteSubscribed);

describe("Subscribed Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should respond with a list of subscribed users", async () => {
        const subscribedUsers = [
            {
                id: "mocked-uuid",
                email: "user1@example.com",
            },
        ];

        (SubscribedModel.findAll as jest.Mock).mockResolvedValue(subscribedUsers);

        const response = await request(testApp).get("/newsletter");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(subscribedUsers);
    });

    it("should handle errors in getSubscribed and respond with a 500 status code", async () => {
        (SubscribedModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).get("/newsletter");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should respond with details of a subscribed user by ID", async () => {
        const subscribedUser = {
            id: "mocked-uuid",
            email: "user1@example.com",
        };

        (SubscribedModel.findByPk as jest.Mock).mockResolvedValue(subscribedUser);

        const response = await request(testApp)
            .get("/newsletter/mocked-uuid")
            .set('Authorization', 'Bearer yourAdminToken');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(subscribedUser);
    });

    it("should handle errors in getSubscribedById and respond with a 500 status code", async () => {
        (SubscribedModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp)
            .get("/newsletter/mocked-uuid")
            .set('Authorization', 'Bearer yourAdminToken'); 

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should create a new subscribed user", async () => {
        const newSubscribedUser = {
            email: "newuser@example.com",
        };

        (SubscribedModel.findOne as jest.Mock).mockResolvedValue(null);
        (SubscribedModel.create as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            email: "newuser@example.com",
        });

        const response = await request(testApp)
            .post("/newsletter")
            .send(newSubscribedUser);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: "mocked-uuid",
            email: "newuser@example.com",
        });
    });

    it("should handle errors in createSubscribed and respond with a 500 status code", async () => {
        (SubscribedModel.findOne as jest.Mock).mockRejectedValue(
            new Error("Required data is missing to subscribe to the newsletter.")
        );

        const response = await request(testApp).post("/newsletter");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Required data is missing to subscribe to the newsletter." });
    });

    it("should update details of a subscribed user by ID", async () => {
        const updatedSubscribedUser = {
            email: "updateduser@example.com",
        };

        (SubscribedModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            email: "updateduser@example.com",
            update: jest.fn(),
        });

        const response = await request(testApp)
            .put("/newsletter/mocked-uuid")
            .send(updatedSubscribedUser);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: "mocked-uuid",
            email: "updateduser@example.com",
        });
    });

    it("should handle errors in updateSubscribed and respond with a 500 status code", async () => {
        (SubscribedModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).put("/newsletter/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should delete a subscribed user by ID", async () => {
        (SubscribedModel.findByPk as jest.Mock).mockResolvedValue({
            id: "mocked-uuid",
            email: "user1@example.com",
            destroy: jest.fn(),
        });

        const response = await request(testApp).delete("/newsletter/mocked-uuid");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "User deleted successfully." });
    });

    it("should handle errors in deleteSubscribed and respond with a 500 status code", async () => {
        (SubscribedModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).delete("/newsletter/mocked-uuid");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
