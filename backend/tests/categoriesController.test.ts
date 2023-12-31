import request from "supertest";
import express from "express";
import { Sequelize } from "sequelize";
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesController";
import CategoryModel from "../models/categoriesModel";

jest.mock("sequelize");
const mockedSequelize = new Sequelize("sqlite::memory:");

jest.mock("uuid");

const testApp = express();
testApp.get("/categories", getCategories);
testApp.get("/categories/:id", getCategoryById);
testApp.post("/categories", createCategory);
testApp.put("/categories/:id", updateCategory);
testApp.delete("/categories/:id", deleteCategory);

describe("Categories Controller", () => {
    beforeEach(() => {

        jest.clearAllMocks();
    });

    it("should respond with a list of categories", async () => {

        const categories = [
            {
                category_id: 1,
                category_name: "Emprendimiento",
            },
            {
                category_id: 2,
                category_name: "Fabricación digital",
            },
        ];

        (CategoryModel.findAll as jest.Mock).mockResolvedValue(categories);

        const response = await request(testApp).get("/categories");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(categories);
    });

    it("should respond with a single category by ID", async () => {

        const category = {
            category_id: 1,
            category_name: "Emprendimiento",
        };

        (CategoryModel.findByPk as jest.Mock).mockResolvedValue(category);

        const response = await request(testApp).get("/categories/1");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(category);
    });

    it("should handle errors and respond with a 500 status code", async () => {

        (CategoryModel.findAll as jest.Mock).mockRejectedValue(
            new Error("Database error")
        );

        const response = await request(testApp).get("/categories");

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: "Database error" });
    });
});
