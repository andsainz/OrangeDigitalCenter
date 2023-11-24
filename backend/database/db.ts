import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

const db: Sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: "mysql",
  }
);

const database: Sequelize = db;

export async function checkDatabaseConnection() {
  try {
    await database.authenticate();
    console.log("Connection to the database established correctly.");
  } catch (error) {
    console.error("Could not connect to the database:", error);
  }
}
checkDatabaseConnection();

database.sync({ force: false })
  .then(() => {
    console.log("Tables synchronized with the database!");
  })
  .catch((error) => {
    console.error("Error synchronizing tables with the database:", error);
  });

export default database;