import mysql from "mysql";

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "kerry",
        password: "flexible",
        database: "todo_api",
    },
);

export default db;
