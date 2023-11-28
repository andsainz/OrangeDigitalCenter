import { checkDatabaseConnection, synchronizeDatabase } from "../database/db";

jest.mock("sequelize");

describe("Database Tests", () => {
    it("should check database connection", async () => {

        jest.spyOn(require("sequelize").Sequelize.prototype, "authenticate")
            .mockResolvedValueOnce(undefined);

        await checkDatabaseConnection();

        expect(require("sequelize").Sequelize.prototype.authenticate).toHaveBeenCalled();
    });

    it("should synchronize database tables", async () => {
        jest.spyOn(require("sequelize").Sequelize.prototype, "sync")
            .mockResolvedValueOnce(undefined);
    
        await synchronizeDatabase();
    
        if (process.env.NODE_ENV !== 'test') {
            expect(require("sequelize").Sequelize.prototype.sync).toHaveBeenCalled();
        } else {
            expect(require("sequelize").Sequelize.prototype.sync).not.toHaveBeenCalled();
        }
    });
});
