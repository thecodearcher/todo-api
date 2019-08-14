import { Sequelize } from "sequelize";
import {  DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../config/index";

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
});
export { db };
