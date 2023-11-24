import request from "supertest";
import express from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getSubscribed } from "../controllers/subscribedController";
import SubscribedModel from "../models/subscribedModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp = express();
testApp.get("/subscribed", getSubscribed);

describe("Subscribed Controller - getSubscribed", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should respond with a list of subscribed users", async () => {
        const subscribedUsers = [
            {
                id: "mocked-uuid",
                email: "user1@example.com"
            },
        ];

        (SubscribedModel.findAll as jest.Mock).mockResolvedValue(subscribedUsers);

        const response = await request(testApp).get("/subscribed");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(subscribedUsers);
    });

    it("should handle errors and respond with a 500 status code", async () => {
        (SubscribedModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).get("/subscribed");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
