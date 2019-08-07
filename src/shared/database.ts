import mysql from "mysql";

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "kerry",
        password: "password",
        database: "todo_api",
    },
);

export default db;
