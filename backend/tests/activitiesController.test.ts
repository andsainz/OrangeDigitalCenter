import request from "supertest";
import express, { Application } from "express";
import { Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { getActivities, getActivityById, getActivitiesByCategory, createActivity, updateActivity, deleteActivity } from "../controllers/activitiesController";
import ActivityModel from "../models/activitiesModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");
(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid");

const testApp: Application = express();
testApp.use(express.json());
testApp.get("/activities", getActivities);
testApp.get("/activities/:id", getActivityById);
testApp.get("/activities/category/:category_name", getActivitiesByCategory);
testApp.post("/activities", createActivity);
testApp.put("/activities/:id", updateActivity);
testApp.delete("/activities/:id", deleteActivity);

describe("Activity Controller - Activity Routes", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should respond with a list of activities", async () => {
        const activities = [
            {
                activity_id: "mocked-uuid",
                category_name: "Category 1",
            },
        ];
        (ActivityModel.findAll as jest.Mock).mockResolvedValue(activities);
        const response = await request(testApp).get("/activities");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(activities);
    });

    it("should respond with activity details by ID", async () => {
        const activityId = "mocked-uuid";
        const activityDetails = {
            activity_id: activityId,
            category_name: "Category 1",
        };
        (ActivityModel.findByPk as jest.Mock).mockResolvedValue(
            activityDetails
        );
        const response = await request(testApp).get(
            `/activities/${activityId}`
        );
        expect(response.status).toBe(200);
        expect(response.body).toEqual(activityDetails);
    });

    it("should handle errors for getting activity by ID and respond with a 500 status code", async () => {
        const activityId = "mocked-uuid";
        (ActivityModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
        const response = await request(testApp).get(
            `/activities/${activityId}`
        );
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });

    it("should respond with a list of activities in a specific category", async () => {
        const categoryName = "Category 1";
        const activities = [
            {
                activity_id: "mocked-uuid",
                category_name: categoryName,
            },
        ];
        (ActivityModel.findAll as jest.Mock).mockResolvedValue(activities);
        const response = await request(testApp).get(
            `/activities/category/${categoryName}`
        );
        expect(response.status).toBe(200);
        expect(response.body).toEqual(activities);
    });

    it("should handle errors in deleteActivity and respond with a 500 status code", async () => {
        (ActivityModel.findByPk as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );
        const response = await request(testApp).delete(
            "/activities/mocked-uuid"
        );
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
