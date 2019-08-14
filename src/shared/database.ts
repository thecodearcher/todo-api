import { Sequelize } from "sequelize";
// import {  DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../config/index";

const connection = new Sequelize("todo", "muyi", "fedgac11451", {
    host: "localhost",
    dialect: "mysql",
});
export { connection};
