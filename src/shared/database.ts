<<<<<<< HEAD
import { Sequelize } from "sequelize";
// import {  DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../config/index";

const connection = new Sequelize("todo", "muyi", "fedgac11451", {
    host: "localhost",
    dialect: "mysql",
});
export { connection};
=======
import mysql from "mysql";

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "muyi",
        password: "fedgac11451",
        database: "todo",
    },
);

export default db;
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192
